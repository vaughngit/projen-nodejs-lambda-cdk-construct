import * as path from 'path';
import { Duration, Stack } from 'aws-cdk-lib';
//import { Code, Function, Runtime, RuntimeFamily } from 'aws-cdk-lib/aws-lambda';
import { Code, Function, IFunction, LayerVersion, Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { LogLevel } from './props';
//import { logger, tracer, metrics } from "./powertools"

/**
 * This is a IinlineLambdaPropeties identified by `I` in its name.
 * It will be translated to a "regular" interface which needs to be implemented.
 *
 * @see https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces
 */
export interface IPowerToolsLambdaProperties {
  // using 'readonly' here will not create a setter method for this property but only a getter; not using 'readonly' will produce a setter + getter
  readonly sourceCodedirPath: string;
  /**
   * App or Solution Name
   * @default: 'DemoSolution
   */
  solutionName?: string;
  /**
   * Function Name.
   * @default: 'DemoFunction
   */
  functionName?: string;

  /** Function description */
  description?: string;
  /**
     * Function memory size
     * @default 128
     */
  memorySize?: number;
  /**
       * Function timeout in seconds
       * @default 10
       */
  timeout?: number;
  /**
       * Function log retention in days
       * @default 30
       */
  logRetention?: string;
  /**
         * Metrics Namespace.
         * @default: 'DemoNamespace
         */
  metricsNamespace?: string;
  /**
     * Log level.
     * @default 'INFO'
     */
  logLevel?: LogLevel;
  /**
     * Log the event
     * @default false
     */
  logEvent?: boolean;
  /**
     * Layer containing PowerTools modules.
     * If not included a layer will be created.
     */
  toolsLayer?: LayerVersion;

  /** Add other layers if required */
  layers?: LayerVersion[];
  /**
     * Env variables.
     * PowerTools and env name are included by default.
     */
  environment?: {
    [key: string]: string;
  };
}


export class PowerToolsLambdaConstruct extends Construct {

  public readonly function: IFunction;

  constructor(parent: Stack, name: string, props: IPowerToolsLambdaProperties) {
    super(parent, name);

    const powertoolsLayer = LayerVersion.fromLayerVersionArn(this, 'powertoolsll', `arn:aws:lambda:${parent.region}:094274105915:layer:AWSLambdaPowertoolsTypeScript:6`);

    const {
      solutionName,
      functionName='testfunction',
      description,
      memorySize,
      timeout = 10,
      // logRetention = '30',
      metricsNamespace,
      logLevel,
      logEvent,
      environment = {},
      layers = [],
    } = props;


    if (!props.sourceCodedirPath) {
      throw 'Must provide path to code from root!';
    }

    if (!path.resolve(__dirname, props.sourceCodedirPath)) {
      throw 'Path does not resolve via resolve!';
    }

    if (!path.join(__dirname, props.sourceCodedirPath)) {
      throw 'Path does not resolve via join!';
    }

    const metricsSvcName = solutionName || 'DemoSolution';
    const metricNamespace = metricsNamespace || functionName.toUpperCase();


    const powertoolsEnv = {
      POWERTOOLS_SERVICE_NAME: metricsSvcName,
      POWERTOOLS_METRICS_NAMESPACE: metricNamespace,
      LOG_LEVEL: logLevel || 'INFO',
      POWERTOOLS_LOGGER_LOG_EVENT: (logEvent) ? 'true' : 'false',
      POWERTOOLS_TRACER_CAPTURE_RESPONSE: (logLevel === 'DEBUG') ? 'true' : 'false',
    };

    // most simple function with static inline code that prints the event and calls the callback function
    const powertoolsFunction = new Function(this, 'PowerToolsFunction', {
      functionName,
      description,
      memorySize,
      tracing: Tracing.ACTIVE,
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset(path.join(__dirname, props.sourceCodedirPath)),
      handler: 'index.handler',
      timeout: Duration.seconds(timeout),

      // logRetention: parseInt(logRetention),
      environment: {
        NODE_OPTIONS: '--enable-source-maps',
        // FUNCTION_LABEL: label,
        ...powertoolsEnv,
        ...environment,
      },
      layers: [
        //toolsLayer,
        powertoolsLayer,
        ...layers,
      ],
    });

    this.function = powertoolsFunction;

  }
}