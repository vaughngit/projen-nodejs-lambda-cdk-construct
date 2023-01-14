const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'VaughnGit',
  authorAddress: 'alvin.vaughn@outlook.com',
  cdkVersion: '2.59.0',
  //lambdaAutoDiscover: false,
  lambdaOptions: {
    // target node.js runtime
    runtime: awscdk.LambdaRuntime.NODEJS_16_X,
    bundlingOptions: {
      // list of node modules to exclude from the bundle
      externals: ['aws-sdk'],
      sourcemap: true,
    },

  },

  //cdkVersionPinning: false, // see https://www.matthewbonig.com/2021/04/06/automating-construct-publishing/
  defaultReleaseBranch: 'main',
  name: 'projen-nodejs-lambda-cdk-construct',
  description: 'cdk lambda constrct with powertools integration',
  repositoryUrl: 'https://github.com/vaughngit/projen-nodejs-lambda-cdk-construct.git',
  docgen: true,
  license: 'Apache-2.0',
  keywords: ['functions', 'nodejs', 'cdk', 'AWS', 'lambda', 'powertools'],
  bundledDeps: [
    // '@aws-lambda-powertools/commons',
    '@aws-lambda-powertools/logger',
    '@aws-lambda-powertools/metrics',
    '@aws-lambda-powertools/tracer',
    '@middy/core',
    // 'aws-sdk',
    // 'moment',
  ],
  deps: [], /* Runtime dependencies of this module. */
  devDeps: [
    'esbuild',
  ], /* Build dependencies for this module. */
  //workflowContainerImage: 'jsii/superchain:1-buster-slim-node16',
  eslint: true,
  /*
  dependabot: true,
  dependabotOptions: {
    autoMerge: true,
    ignoreProjen: true,
    scheduleInterval: DependabotScheduleInterval.WEEKLY,
  },
 */
  workflowNodeVersion: '16.19.0',
  autoApproveOptions: {
    allowedUsernames: ['github-bot', 'vaughngit', 'github-actions'],
  },
  //NPMJS Package
  //publishDryRun: true,
  //releaseToNpm: false,

  packageName: 'vt-lambda-construct',
  /*
  publishToNuget: {
    dotNetNamespace: 'vt.cdk',
    packageId: 'vt.cdk.lambdaConstruct',
  },
  publishToPypi: {
    distName: 'vt.cdk-lambda-constuct',
    module: 'vt_cdk_lambda_construct',
  },
  */
  gitpod: true,
});

project.gitignore.addPatterns('cdk.out');
project.npmignore.addPatterns('cdk.out', 'examples', 'gitpod_scripts');


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

// example to show how you can use your own esbuild task to bundle your Lambda function without using constructs like NodejsFunction
//project.compileTask.exec('esbuild src/lambda-bundled/index.js --bundle --platform=node --target=node16 --external:aws-sdk --outfile=lib/lambda-bundled/index.js');
//project.compileTask.exec('esbuild sourceCode/lambda-bundled/index.js --bundle --platform=node --target=node16 --external:aws-sdk --outfile=lib/lambda-bundled/index.js');
//project.compileTask.exec('esbuild src/PowerToolsLambdaConstruct.ts --bundle --platform=node --target=node16 --external:aws-sdk --outfile=lib/PowerToolsLambdaConstruct.js');
project.compileTask.exec('npm install --prefix sourceCode/lambda-ts ');
project.compileTask.exec('esbuild sourceCode/lambda-ts/index.ts --bundle --platform=node --target=node16 --external:aws-sdk --outfile=lib/lambda-ts/index.js');

project.synth();