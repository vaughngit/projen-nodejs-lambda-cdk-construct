import { Duration } from 'aws-cdk-lib';
import {
  Color,
  GaugeWidget, GraphWidget, GraphWidgetView, IWidget,
  LogQueryVisualizationType, LogQueryWidget, MathExpression, Metric,
  SingleValueWidget, TextWidget,
} from 'aws-cdk-lib/aws-cloudwatch';
import { Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { ILogGroup } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';
//import { CustomFunctionProps, PowerToolsEnvProps } from './types';
//import { PowerToolsEnvProps } from './types';
//import { ToolsLayer } from 'vaughntech-nodejs-powertools-lambdalayer';

/**
 * External npm modules that are included in the tools-layer.
 * These module are excluded in the bundle process.
 * This list needs to be updated if modules are added/removed from the tools-layer.
 */
/*
const toolsModuleList = [
  '@aws-lambda-powertools/commons',
  '@aws-lambda-powertools/logger',
  '@aws-lambda-powertools/metrics',
  '@aws-lambda-powertools/tracer',
  '@middy/core',
  'aws-sdk',
  'moment',
];

 */
/**
 * Creates a Lambda function from the Typescript source.
 * Includes PowerTools logging option settings.
 */
export interface IPowerToolsProps {
  /**
 * Debug log sampling rate. Zero means all events.
 * @default 'testfunction'
 * */
  functionName: string;
  description?: string;
  entry: string;
  label?: string;
  logLevel?: string;
  logEvent?: string;
  logRetention?: string;
  memorySize?: string;
  timeout?: string;
  metricsNamespace?: string;

}


export class NodeJsPowerToolsFunction extends Construct {
  /** The new function */
  function: NodejsFunction;

  /** CloudWatch Log Group */
  logGroup: ILogGroup;

  /** CloudWatch Widgets for Dashboard */
  dashboardWidgets: IWidget[];

  /**
     * @param {Construct} scope
     * @param {string} id
     * @param {PowerToolsProps } props
     */

  // constructor(scope: Construct, id: string, props: ICustomFunctionProps) {
  constructor(scope: Construct, id: string, props: IPowerToolsProps ) {
    super(scope, id);

    const {
      functionName,
      description,
      entry,
      label = 'Function',
      //logLevel = 'INFO',
      //logEvent = false,
      logRetention = '30',
      memorySize = '128',
      timeout = '10',
      // layers = [],
      // environment = {},
      // powerToolsOptions = {},
    //  functionProps = {},
    } = props;


    // Set Defaults
    /*     const {
      logLevel = 'INFO',
      logEvent = false,
    } = powerToolsOptions;
 */
    /*
    const {
      logRetention = 30,
      memorySize = 128,
      timeout = 10,
    } = functionProps;

  */


    /*     const metricNamespace = powerToolsOptions.metricsNamespace || 'DemoNamespace';
    const metricsSvcName = functionName.toUpperCase();
    */

    const metricNamespace = props.metricsNamespace || 'DemoNamespace';
    const metricsSvcName = functionName.toUpperCase();

    //const powertoolsEnv: PowerToolsEnvProps = {
    const powertoolsEnv = {
      powertoolsServiceName: metricsSvcName,
      powertoolsMetricsNamespace: metricNamespace,
      //logLevel: logLevel,
      // powertoolsLoggerLogEvent: (logEvent) ? 'true' : 'false',
      // powertoolsTracerCaptureResponse: (logLevel === 'DEBUG') ? 'true' : 'false',
      powertoolsTraceEnabled: 'true',
      powertoolsTracerCaptureError: 'true',
      powertoolsTracerCaptureHttpsRequests: 'true',
      powertoolsLoggerSampleRate: '0',
    };


    //const toolsLayer = props.toolsLayer || new ToolsLayer(this, 'ToolsLayer', { layerVersionName: functionName }).layerVersion;

    const fnc = new NodejsFunction(this, 'Fnc', {
      description,
      runtime: Runtime.NODEJS_16_X,
      memorySize: parseInt(memorySize),
      timeout: Duration.seconds(parseInt(timeout)),
      tracing: Tracing.ACTIVE,
      logRetention: parseInt(logRetention),
      layers: [
        //props.toolsLayer,
      //  ...layers,
      ],
      /*       bundling: {
        sourceMap: true,
        externalModules: toolsModuleList,
      }, */
      entry,
      environment: {
        NODE_OPTIONS: '--enable-source-maps',
        FunctionLabel: label,
        ...powertoolsEnv,
        //...environment,
      },
    });
    this.function = fnc;
    this.logGroup = fnc.logGroup;

    /**
         * Standard Metrics for the Lambda Function
         */
    const invocationMetric = fnc.metricInvocations({
      label: `${label} Invocations`,
      dimensionsMap: {
        FunctionName: fnc.functionName,
      },
      statistic: 'sum',
      period: Duration.minutes(15),
    });
    const durationMetricAvg = fnc.metricDuration({
      label: `${label} Duration Avg`,
      statistic: 'avg',
      dimensionsMap: {
        FunctionName: fnc.functionName,
      },
      color: Color.PURPLE,
    });
    const durationMetricMax = fnc.metricDuration({
      label: `${label} Duration Max`,
      statistic: 'max',
      dimensionsMap: {
        FunctionName: fnc.functionName,
      },
      color: Color.RED,
    });
    const durationMetricMin = fnc.metricDuration({
      label: `${label} Duration Min`,
      statistic: 'min',
      dimensionsMap: {
        FunctionName: fnc.functionName,
      },
      color: Color.GREEN,
    });
    const coldStartMetric = new Metric({
      metricName: 'ColdStart',
      namespace: metricNamespace,
      label: `${label} ColdStart`,
      dimensionsMap: {
        function_name: fnc.functionName,
        service: metricsSvcName,
      },
      statistic: 'sum',
      color: Color.BLUE,
    });
    const warmStartMetric = new MathExpression({
      label: `${label} Warm Start`,
      expression: 'invocations - coldStarts',
      usingMetrics: {
        invocations: invocationMetric,
        coldStarts: coldStartMetric,
      },
      color: Color.GREEN,
    });
    const warningMetric = new Metric({
      metricName: 'WARNING',
      namespace: metricNamespace,
      label: `${label} Warning`,
      dimensionsMap: {
        function_name: fnc.functionName,
        service: metricsSvcName,
      },
      statistic: 'sum',
      period: Duration.minutes(15),
      color: Color.ORANGE,
    });
    const errorMetric = new Metric({
      metricName: 'ERROR',
      namespace: metricNamespace,
      label: `${label} Error`,
      dimensionsMap: {
        function_name: fnc.functionName,
        service: metricsSvcName,
      },
      statistic: 'sum',
      period: Duration.minutes(15),
      color: Color.RED,
    });

    /**
         * Standard Widgets for adding to a CloudWatch Dashboard
         */
    const headerWidget = new TextWidget({
      markdown: `## ${label} Metrics`,
      width: 24,
      height: 1,
    });
    const invocationStats = new SingleValueWidget({
      metrics: [invocationMetric],
      sparkline: true,
      height: 6,
    });
    const coldStartStats = new GraphWidget({
      title: `${label} Cold and Warm Starts`,
      left: [coldStartMetric],
      right: [warmStartMetric],
      view: GraphWidgetView.PIE,
      setPeriodToTimeRange: true,
      height: 6,
    });
    const durationAvgGauge = new GaugeWidget({
      title: `${label} Average Duration`,
      metrics: [durationMetricAvg],
      leftYAxis: {
        min: 0,
        max: parseInt(timeout) * 1000,
      },
      height: 6,
    });
    const durationMaxGauge = new GaugeWidget({
      title: `${label} Max Duration`,
      metrics: [durationMetricMax],
      leftYAxis: {
        min: 0,
        max: parseInt(timeout) * 1000,
      },
      height: 6,
    });
    const durationMinGauge = new GaugeWidget({
      title: `${label} Min Duration`,
      metrics: [durationMetricMin],
      leftYAxis: {
        min: 0,
        max: parseInt(timeout) * 1000,
      },
      height: 6,
    });
    const errorStats = new SingleValueWidget({
      title: `${label} 40x Warning and 500 Errors`,
      metrics: [warningMetric, errorMetric],
      sparkline: true,
      height: 6,
    });

    // Error Log Query Widget
    const errorLogWidget = new LogQueryWidget({
      title: `${label} Errors`,
      logGroupNames: [fnc.logGroup.logGroupName],
      view: LogQueryVisualizationType.TABLE,
      queryLines: [
        'fields @timestamp, @message',
        'sort @timestamp desc',
        'filter level = "ERROR"',
        'limit 20',
      ],
      width: 12,
      height: 6,
    });

    /**
         * Export all the widgets for use in a Dashboard Row
         */
    this.dashboardWidgets = [
      headerWidget,
      invocationStats,
      coldStartStats,
      durationAvgGauge,
      durationMaxGauge,
      durationMinGauge,
      errorStats,
      errorLogWidget,
    ];
  }
}
