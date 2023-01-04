//import { countResources, expect as expectCDK } from '@aws-cdk/assert';
import { App, Stack } from 'aws-cdk-lib';
//import { Match, Template } from 'aws-cdk-lib/assertions';
import { Template } from 'aws-cdk-lib/assertions';
import { ConstructWithProperties } from '../src';


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

