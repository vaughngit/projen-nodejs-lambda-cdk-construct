import { LayerVersion } from 'aws-cdk-lib/aws-lambda';
//import { LogLevel } from '../types';

/** Log Levels */
export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

/** PowerTools Env Variables */
export interface IPowerToolsEnvProps {
  /**
     * Sets service name used for tracing namespace, metrics dimension and structured logging
     * @default 'service_undefined'
     * */
  powertoolsServiceName?: string;
  /**
     * Sets namespace used for metrics
     * @default null
     * */
  powertoolsMetricsNamespace?: string;
  /**
     * Explicitly enables/disables tracing
     * @default 'true'
     * */
  powertoolsTraceEnabled?: 'true' | 'false';
  /**
     * Captures Lambda or method return as metadata.
     * @default 'true'
     * */
  powertoolsTracerCaptureResponse?: 'true' | 'false';
  /**
     * Captures Lambda or method exception as metadata.
     * @default 'true'
     * */
  powertoolsTracerCaptureError?: 'true' | 'false';
  /**
     * Captures HTTP(s) requests as segments.
     * @default 'true'
     * */
  powertoolsTracerCaptureHttpsRequests?: 'true' | 'false';
  /**
     * Logs incoming event
     * @default 'false'
     * */
  powertoolsLoggerLogEvent?: 'true' | 'false';
  /**
     * Debug log sampling rate. Zero means all events.
     * @default '0'
     * */
  powertoolsLoggerSampleRate?: string;
  /**
     * Sets logging level
     * @default 'INFO'
     * */
  //logLevel?: LogLevel;
};

export interface ICustomFunctionProps {
  /** Parent service name */
  functionName: string;

  /** Function description */
  description?: string;

  /**
     * Function Label.
     * Used in logs and widgets because
     * we generate a less friendly function
     * name by default.
   */
  label?: string;

  /**
     * Code entry point.
     * Eg: `${__dirname}/../lambda/my-function/index.ts`
     */
  entry: string;

  /**
     * Layer containing PowerTools modules.
     * If not included a layer will be created.
   */
  //toolsLayer: LayerVersion;

  /** Add other layers if required */
  layers?: LayerVersion[];

  /**
     * Env variables.
     * PowerTools and env name are included by default.
     */
  /*   environment?: {
    [key: string]: string;
  };
 */
  /** Function props */
  functionProps?: {
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
    logRetention?: number;
  };

  /**
     * PowerTools options
     */
  powerToolsOptions?: {
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
         * Metrics Namespace.
         * @default: 'DemoNamespace'
         */
    metricsNamespace?: string;
  };
};
