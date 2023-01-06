import * as path from 'path';
import { Duration } from 'aws-cdk-lib';
//import { Code, Function, Runtime, RuntimeFamily } from 'aws-cdk-lib/aws-lambda';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * This is a IinlineLambdaPropeties identified by `I` in its name.
 * It will be translated to a "regular" interface which needs to be implemented.
 *
 * @see https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces
 */
export interface IPowerToolsLambdaProperties {
  // using 'readonly' here will not create a setter method for this property but only a getter; not using 'readonly' will produce a setter + getter
  readonly sourceCodedirPath: string;
}

/**
 * A CDK construct to create Lambda functions.
 */
/* export class PowerToolsLambdaConstruct extends Function {
  constructor(parent: Construct, name: string, props: IPowerToolsLambdaProperties) {

    if (!props.sourceCodedirPath) {
      throw 'Must provide path to code from root!';
    }

    if (!path.resolve(__dirname, props.sourceCodedirPath)) {
      throw 'Path does not resolve via resolve!';
    }

    if (!path.join(__dirname, props.sourceCodedirPath)) {
      throw 'Path does not resolve via join!';
    }

    super(parent, name, {
      description: 'src/lambda-ts/index.lambda.ts',
      ...props,
      runtime: new Runtime('nodejs16.x', RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: Code.fromAsset(path.join(__dirname, props.sourceCodedirPath)),
      timeout: Duration.seconds(10),
    });


  }
}
 */

export class PowerToolsLambdaConstruct extends Construct {
  constructor(parent: Construct, name: string, props: IPowerToolsLambdaProperties) {
    super(parent, name);

    if (!props.sourceCodedirPath) {
      throw 'Must provide path to code from root!';
    }

    if (!path.resolve(__dirname, props.sourceCodedirPath)) {
      throw 'Path does not resolve via resolve!';
    }

    if (!path.join(__dirname, props.sourceCodedirPath)) {
      throw 'Path does not resolve via join!';
    }


    // most simple function with static inline code that prints the event and calls the callback function
    new Function(this, 'PowerToolsFunction', {
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset(path.join(__dirname, props.sourceCodedirPath)),
      handler: 'index.handler',
      timeout: Duration.seconds(10),
    });


  }
}