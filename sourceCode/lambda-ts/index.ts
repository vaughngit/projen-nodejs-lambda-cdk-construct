import { Context } from 'aws-lambda';
import { Logger, injectLambdaContext } from '@aws-lambda-powertools/logger';
import { Metrics, MetricUnits, logMetrics } from '@aws-lambda-powertools/metrics';
import { Tracer, captureLambdaHandler } from '@aws-lambda-powertools/tracer';
import { default as request } from 'phin';

/** Instantiate the PowerTools instances */
const logger = new Logger();
const tracer = new Tracer();
const metrics = new Metrics();

export const handler = async(event: any,  context: Context) => {
  // TODO implement

       // Logger: Log the incoming event
       logger.info('Lambda invocation event', { event });

       // Tracer: Get facade segment created by AWS Lambda
       const segment = tracer.getSegment();
   
         // Tracer: Create subsegment for the function & set it as active
       const handlerSegment = segment.addNewSubsegment(`## ${process.env._HANDLER}`);
       tracer.setSegment(handlerSegment);
     
         // Tracer: Annotate the subsegment with the cold start & serviceName
       tracer.annotateColdStart();
       tracer.addServiceNameAnnotation();
   
         // Tracer: Add awsRequestId as annotation
         tracer.putAnnotation('awsRequestId', context.awsRequestId);
   
           // Metrics: Capture cold start metrics
         metrics.captureColdStartMetric();
   
           // Logger: Append awsRequestId to each log statement
         logger.appendKeys({
           awsRequestId: context.awsRequestId,
         });

  try{


       // Request a sample random uuid from a webservice
      const res = await request<{ uuid: string }>({
        url: 'https://httpbin.org/uuid',
        parse: 'json',
      });
      const { uuid } = res.body;

      // Logger: Append uuid to each log statement
      logger.appendKeys({ uuid });

      // Tracer: Add uuid as annotation
      tracer.putAnnotation('uuid', uuid);

      // Metrics: Add uuid as metadata
      metrics.addMetadata('uuid', uuid);

          /** Adding the function_name dimension to match the default used in the PowerTools cold start metric */
    metrics.addDimension('function_name', process.env.AWS_LAMBDA_FUNCTION_NAME || 'unknown');

    console.log('Event: ', event);

    
    logger.info(`Response ${event}`, {
      statusCode: 200
    });

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;

  }catch(error){
    if (!(error instanceof Error)) { throw error; }

    tracer.addErrorAsMetadata(error as Error);
    logger.error('Error writing data to table. ' + error);
    logger.error('Unexpected error occurred while trying to retrieve products', error as Error);

    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(error),
    };
    
  }   finally {
    // Tracer: Close subsegment (the AWS Lambda one is closed automatically)
    handlerSegment.close(); // (## index.handler)
    // Tracer: Set the facade segment as active again (the one created by AWS Lambda)
    tracer.setSegment(segment);
  }

}; 


