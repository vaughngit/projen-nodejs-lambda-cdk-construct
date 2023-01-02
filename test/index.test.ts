//import { countResources, expect as expectCDK } from '@aws-cdk/assert';
import { App, Stack } from 'aws-cdk-lib';
//import { Match, Template } from 'aws-cdk-lib/assertions';
import { Template } from 'aws-cdk-lib/assertions';
import { LambdaConstruct } from '../src';

test('Simple test', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new LambdaConstruct(stack, 'LambdaConstruct');

  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::Lambda::Function', 5); // delete adds additional customer resource
});
