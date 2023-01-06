//import { countResources, expect as expectCDK } from '@aws-cdk/assert';
import { App, Stack } from 'aws-cdk-lib';
//import { Match, Template } from 'aws-cdk-lib/assertions';
import { Template } from 'aws-cdk-lib/assertions';
import { PowerToolsLambdaConstruct } from '../src';


test('sourceCode function test', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new PowerToolsLambdaConstruct(stack, 'PowerToolsLambdaConstruct', {
    sourceCodedirPath: '../sourceCode/lambda-js',
  });

  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::Lambda::Function', 1); // delete adds additional customer resource
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


