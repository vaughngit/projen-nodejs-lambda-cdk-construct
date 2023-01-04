//import { countResources, expect as expectCDK } from '@aws-cdk/assert';
import { App, Stack } from 'aws-cdk-lib';
//import { Match, Template } from 'aws-cdk-lib/assertions';
import { Template } from 'aws-cdk-lib/assertions';
import { InlineLambdaConstruct } from '../src';


test('inline function test', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new InlineLambdaConstruct(stack, 'InlineLambdaConstruct', {
    inlineCode: 'exports.handler = function (e, ctx, cb) { console.log("Event: ", e); cb(); };',
  });

  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::Lambda::Function', 1); // delete adds additional customer resource
});


describe('fail test', () => {

  test('no inline code test', () => {
    expect(() => {
      const app = new App();
      const stack = new Stack(app, 'TestStack');

      new InlineLambdaConstruct(stack, 'InlineLambdaConstruct', {
        inlineCode: '',
      });
    }).toThrowError();
  });


});


