import { App, Stack } from 'aws-cdk-lib';
//import { Match, Template } from 'aws-cdk-lib/assertions';
import { Template } from 'aws-cdk-lib/assertions';
//import { AssetCode, LayerVersion, Runtime, LayerVersionProps } from 'aws-cdk-lib/aws-lambda';
import { LayerVersion } from 'aws-cdk-lib/aws-lambda';

import { ToolsLayer } from '../src';

test('Checks if the lambda layer is an instance of AWS Lambda layer.', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');
  new ToolsLayer(stack, 'testing', { layerVersionName: 'test' });
  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::Lambda::LayerVersion', 1); // delete adds additional customer resource
});


test('Checks if the lambda layer is an instance of AWS Lambda layer.', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  const lambdaLayer = new ToolsLayer(stack, 'testing', { layerVersionName: 'test' });
  expect(lambdaLayer.layerVersion).toBeInstanceOf(LayerVersion);

});
