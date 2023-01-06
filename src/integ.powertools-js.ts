import { App, Stack } from 'aws-cdk-lib';
//import { BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { PowerToolsLambdaConstruct } from './index';

const aws_region = 'us-east-2';
const solution = 'testingconstruct';
const environment = 'dev';
const costcenter = 'bex';

export class IntegTesting {
  readonly stack: Stack[];
  constructor() {

    const env = {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: aws_region || process.env.CDK_DEFAULT_REGION,
    };


    const app = new App();
    const stack = new Stack(app, 'IntegratedPowerToolsTestStack', {
      env,
      tags: {
        solution,
        environment,
        costcenter,
      },
    });


    //lambda function integration
    new PowerToolsLambdaConstruct(stack, 'PowerToolsLambdaConstruct-js', {
      sourceCodedirPath: '../sourceCode/lambda-js',
    });


    this.stack = [stack];

  }
}

new IntegTesting();