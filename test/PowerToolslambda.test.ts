//import { countResources, expect as expectCDK } from '@aws-cdk/assert';
import { App, Stack } from 'aws-cdk-lib';
//import { Match, Template } from 'aws-cdk-lib/assertions';
import { Template } from 'aws-cdk-lib/assertions';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { PowerToolsLambdaConstruct } from '../src';


test('sourceCode function test', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new PowerToolsLambdaConstruct(stack, 'PowerToolsLambdaConstruct', {
    sourceCodedirPath: '../sourceCode/lambda-js',
  });

  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::Lambda::Function', 1);
});


test('confirm function property output ', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const testfunction = new PowerToolsLambdaConstruct(stack, 'PowerToolsLambdaConstruct', {
    sourceCodedirPath: '../sourceCode/lambda-js',
  });

  Template.fromStack(stack);
  //template.resourceCountIs('AWS::Lambda::Function', 1);
  expect(testfunction.function).toBeInstanceOf(Function);
});

describe('fail test', () => {

  test('no source code test', () => {
    expect(() => {
      const app = new App();
      const stack = new Stack(app, 'TestStack');

      new PowerToolsLambdaConstruct(stack, 'PowerToolsLambdaConstruct', {
        sourceCodedirPath: '',
      });
    }).toThrowError();
  });


});


