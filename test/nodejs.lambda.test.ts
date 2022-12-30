import { App, Stack } from 'aws-cdk-lib';
//import { Match, Template } from 'aws-cdk-lib/assertions';
import { Template } from 'aws-cdk-lib/assertions';
//import { AssetCode, LayerVersion, Runtime, LayerVersionProps } from 'aws-cdk-lib/aws-lambda';
//import { LayerVersion } from 'aws-cdk-lib/aws-lambda';
import { ToolsLayer } from 'vaughntech-nodejs-powertools-lambdalayer';
//import path from 'path';

import { NodeJsPowerToolsFunction } from '../src';

test('Checks if the lambda function is an instance of AWS Lambda.', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');
  new NodeJsPowerToolsFunction(stack, 'testing', {
    //entry: path.join(__dirname, './functions/lambda/hello/index.ts'),
    entry: '../../functions/lambda/hello/index.ts',
    functionName: "hello_function",
    toolsLayer: new ToolsLayer(stack, 'ToolsLayer', { layerVersionName: "testlayer" }).layerVersion,
    //layers: [new ToolsLayer(stack, 'ToolsLayer', { layerVersionName: "testlayer" }).layerVersion]
   });
  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::Lambda::LayerVersion', 1); // delete adds additional customer resource
});


/* 
  test('Checks if the lambda layer is an instance of AWS Lambda layer.', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  const lambdaLayer = new ToolsLayer(stack, 'testing', { layerVersionName: 'test' });
  expect(lambdaLayer.layerVersion).toBeInstanceOf(LayerVersion);

});
 */