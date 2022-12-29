const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'VaughnGit',
  authorAddress: 'alvin.vaughn@outlook.com',
  cdkVersion: '2.58.0',
  defaultReleaseBranch: 'main',
  name: 'projen-nodejs-lambda-cdk-construct',
  repositoryUrl: 'https://github.com/vaughngit/projen-nodejs-lambda-cdk-construct.git',
  docgen: true,
  license: 'Apache-2.0',
  keywords: ['functions', 'nodejs', 'cdk', 'AWS', 'lambda', 'powertools'],

  deps: [], /* Runtime dependencies of this module. */
  devDeps: [], /* Build dependencies for this module. */
  workflowContainerImage: 'jsii/superchain:1-buster-slim-node16',
  workflowNodeVersion: '18.12.1',
  autoApproveOptions: {
    allowedUsernames: ['github-bot', 'vaughngit', 'github-actions'],
  },
  gitignore: ['cdk.out'],
  npmignore: ['cdk.out', 'examples', 'gitpod_scripts'],
  //publishDryRun: true,
  releaseToNpm: false,

  /*   packageName: 'vaughntech-nodejs-lambda-construct', //
  description: 'AWS Node.js Lambda functions baselined with powertool powered tracing, structured logging, custom metrics, and cloudwatch dashboards to help visualize performance.',
  publishToNuget: {
    dotNetNamespace: 'VaughnTech.CDK',
    packageId: 'VaughnTech.CDK.NodeJsLambdaConstruct',
  },
  publishToPypi: {
    distName: 'vaughntech.cdk-nodejs-lambda-constuct',
    module: 'vaughntech_cdk_nodejs_lambda_construct',
  },
 */
  gitpod: true,
});

project.gitpod.addCustomTask({
  init: 'yarn install && yarn run build',
  command: 'yarn run watch',
});

project.gitpod.addCustomTask({
  name: 'ConfigAlias',
  command: 'echo \'alias pj="npx projen"\' >> ~/.bashrc && echo \'alias cdk="npx cdk"\' >> ~/.bashrc',
});

project.gitpod.addCustomTask({
  name: 'Initialize & Configure AWS',
  command: 'bash $GITPOD_REPO_ROOT/gitpod_scripts/gitpod_configure_aws.sh',
});

project.gitpod.addCustomTask({
  name: 'Install DOTNET 6.0',
  command: 'bash $GITPOD_REPO_ROOT/gitpod_scripts/gitpod_configure_dotnet.sh',
});

project.gitpod.addVscodeExtensions(
  'ms-azuretools.vscode-docker',
  'AmazonWebServices.aws-toolkit-vscode',
);


project.synth();