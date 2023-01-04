import { CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * This interface is translated into a _struct_ containing data.
 * E.g. if translated to Java, an interface `StructProperties` is created containing a builder subclass to create an instance of the interface.
 *
 * @see https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces
 */
export interface StructProperties {
  readonly myProp: string;
}

/**
 * This is a _behavioral interface_ identified by `I` in its name.
 * It will be translated to a "regular" interface which needs to be implemented.
 * You can also use methods here, e.g. `doSth(): void;`.
 *
 * @see https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces
 */
export interface IBehaviorProperties {
  // using 'readonly' here will not create a setter method for this property but only a getter; not using 'readonly' will produce a setter + getter
  readonly otherProp: string;
}

/**
 * A simple CDK construct illustrating the differences in declaring construct properties with interfaces.
 */
export class ConstructWithProperties extends Construct {

  /**
 * the will print out via cfnout
 * @default 'nothing'
 */
  protected firstPropOut!: string;
  protected secondPropOut!: string;

  constructor(parent: Construct, name: string, props: StructProperties, props2: IBehaviorProperties) {
    super(parent, name);


    if (props.myProp === 'foo') {
      this.firstPropOut = 'Hello';
      console.log('Hello');
    }

    if (props2.otherProp === 'bar') {
      this.secondPropOut = 'World';
      console.log('World');
    }

    new CfnOutput(this, 'firstProp', {
      value: this.firstPropOut,
      description: 'The name of Property',
      // exportName: 'avatars',
    });

    new CfnOutput(this, 'secondProp', {
      value: this.secondPropOut,
      description: 'The name of Property',
      // exportName: 'avatars',
    });
  }
}
