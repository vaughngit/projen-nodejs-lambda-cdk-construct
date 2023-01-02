import { Logger, injectLambdaContext } from '@aws-lambda-powertools/logger';
import { Metrics, MetricUnits, logMetrics } from '@aws-lambda-powertools/metrics';
import { Tracer, captureLambdaHandler } from '@aws-lambda-powertools/tracer';
import middy from '@middy/core';
//import moment from 'moment';
//import { ItemAttributes } from '../../../types';

//const logExpiry = Number(process.env.LOG_EXPIRY_IN_DAYS) || 30;

/** Instantiate the PowerTools instances */
const logger = new Logger();
const tracer = new Tracer();
const metrics = new Metrics();

// /** Event Props */
// type EventProps = {
//   reqcontext: {
//     requestId: string;
//   //  httpMethod: string;
//   };
//   correlationId: string;
//   throwError?: boolean;
//   idpToken: string;
// };


/** Write Data Result */
type FunctionResult = {
  statusCode: number;
  success: boolean;
  body: string;
  requestId: string;
  correlationId: string;
};
//export const handler = async (event: EventProps, context: object): Promise<FunctionResult>  => {
//const lambdaHandler = async (event: EventProps, context: object): Promise<FunctionResult> => {
//const lambdaHandler = async (event: EventProps): Promise<FunctionResult> => {
const lambdaHandler = async (event: any): Promise<FunctionResult> => {
  //console.log("event object: ",event);
  //console.log("context object", context);

  // const { params, reqcontext } = event;
  // const { correlationId, reqcontext } = event;
  // const { requestId, httpMethod } = reqcontext;
  // const { requestId } = reqcontext;
  //const { correlationId = requestId } = params;

  logger.info('reqcontext', { data: event.reqcontext });

  let statusCode = 500;
  let errorMessage = 'Internal Handler Error';

  /**
   * Add a correlationId (tracking code).
   * correlationId will be included with all logs, metrics and traces
   * and will be searchable/filterable in the CloudWatch console.
   */

  tracer.putAnnotation('correlationId', event.correlationId);
  //logger.appendKeys({ correlationId });
  logger.appendKeys( event.correlationId );
  metrics.addMetadata('correlationId', event.correlationId);

  const requestId = event.requestId;
  const correlationId = event.correlationId;

  try {

    return {
      statusCode: 200,
      body: 'Protected: Hello World :)',
      success: true,
      requestId,
      correlationId,
    };
  } catch (err) {
    if (!(err instanceof Error)) { throw err; }

    /** Adding the function_name dimension to match the default used in the PowerTools cold start metric */
    metrics.addDimension('function_name', process.env.AWS_LAMBDA_FUNCTION_NAME || 'unknown');

    if (statusCode === 400) {
      /** Add WARN level log and metric count for client errors */
      logger.warn(errorMessage, { data: event });
      metrics.addMetric('WARNING', MetricUnits.Count, 1);
    } else {
      /** Add ERROR level log and metric count for internal errors */
      logger.error(err.message, err);
      metrics.addMetric('ERROR', MetricUnits.Count, 1);
    }
    // Set error message string for API Gateway to parse
    err.message = JSON.stringify({
      statusCode,
      message: err.message,
      requestId,
    });
    throw err;
  }
};

/** Wrap the handler with middy and inject PowerTools */
export const handler = middy(lambdaHandler)
  .use(captureLambdaHandler(tracer))
/** clearState resets the correlationId for each invocation */
  .use(injectLambdaContext(logger, { clearState: true }))
  .use(logMetrics(metrics, { captureColdStartMetric: true }));