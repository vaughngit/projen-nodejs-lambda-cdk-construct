

## Testing: 
    npx cdk synth --app='./lib/integ.default.js'
    npx cdk deploy --app='./lib/integ.default.js'
    npx cdk deploy --app='./lib/integ.powertools-ts.js'
    npx cdk destroy --app='./lib/integ.powertools-ts.js'
    Once the build is successful its ready to deploy locally.

## typescript functions follow up reading: 
    https://subaud.io/blog/using-a-typescript-lambda-as-a-cdk-construct-custom-resource
    https://subaud.io/blog/building-cdk-custom-resource-constructs-with-projen-and-typescript
    

## Login via cli 
    aws sso login --no-browser 