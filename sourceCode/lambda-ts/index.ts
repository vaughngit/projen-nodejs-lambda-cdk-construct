import { Logger, injectLambdaContext } from '@aws-lambda-powertools/logger';
import { Metrics, MetricUnits, logMetrics } from '@aws-lambda-powertools/metrics';
import { Tracer, captureLambdaHandler } from '@aws-lambda-powertools/tracer';

/** Instantiate the PowerTools instances */
const logger = new Logger();
const tracer = new Tracer();
const metrics = new Metrics();

export const handler = async(event: any) => {
  // TODO implement

  logger.appendKeys({
    resource_path: event
  });

  try{
    logger.info('Products retrieved', { details: { products: "testproduct" } });
    metrics.addMetric('productsRetrieved', MetricUnits.Count, 1);
  
    console.log('Event: ', event);
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;

  }catch(error){
    logger.error('Unexpected error occurred while trying to retrieve products', error as Error);

    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(error),
    };
    
  }
}; 


