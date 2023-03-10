//import { countResources, expect as expectCDK } from '@aws-cdk/assert';
import { App, Stack } from 'aws-cdk-lib';
//import { Match, Template } from 'aws-cdk-lib/assertions';
import { Template } from 'aws-cdk-lib/assertions';
import { LambdaConstruct, InlineLambdaConstruct, ConstructWithProperties } from '../src';

test('Combined test', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new LambdaConstruct(stack, 'LambdaConstruct');

  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::Lambda::Function', 5); // delete adds additional customer resource
});

test('Properties Construct test', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new ConstructWithProperties(stack, 'LambdaConstruct', { myProp: 'foo' }, { otherProp: 'bar' });

  const template = Template.fromStack(stack);
  template.hasOutput('*', {
    Value: 'Hello',
  });
  template.hasOutput('*', {
    Value: 'World',
  });
});

test('inline function test', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new InlineLambdaConstruct(stack, 'InlineLambdaConstruct', {
    inlineCode: 'exports.handler = function (e, ctx, cb) { console.log("Event: ", e); cb(); };',
  });

  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::Lambda::Function', 1); // delete adds additional customer resource
});


describe('fails', () => {

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


