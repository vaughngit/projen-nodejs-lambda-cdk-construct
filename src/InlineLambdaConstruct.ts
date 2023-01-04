import { Duration } from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * This is a IinlineLambdaPropeties identified by `I` in its name.
 * It will be translated to a "regular" interface which needs to be implemented.
 *
 * @see https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces
 */
export interface IinlineLambdaProperties {
  // using 'readonly' here will not create a setter method for this property but only a getter; not using 'readonly' will produce a setter + getter
  readonly inlineCode: string;
}

/**
 * A CDK construct to create Lambda functions.
 */
export class InlineLambdaConstruct extends Construct {
  constructor(parent: Construct, name: string, props: IinlineLambdaProperties) {
    super(parent, name);

    if (!props.inlineCode) {
      throw 'Must provide inline code!';
    }

    // most simple function with static inline code that prints the event and calls the callback function
    new Function(this, 'InlineFunction', {
      runtime: Runtime.NODEJS_16_X,
      code: Code.fromInline(props.inlineCode),
      handler: 'index.handler',
      timeout: Duration.seconds(10),
    });


  }
}
