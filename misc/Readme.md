
## Login via cli 
    aws sso login --no-browser 

## Testing: 
    npx cdk synth --app='./lib/integ.default.js'
    npx cdk deploy --app='./lib/integ.default.js'
    npx cdk synth --app='./lib/integ.powertools-ts.js'
    npx cdk deploy --app='./lib/integ.powertools-ts.js'
    npx cdk destroy --app='./lib/integ.powertools-ts.js'
    Once the build is successful its ready to deploy locally.

## typescript functions follow up reading: 
    https://subaud.io/blog/using-a-typescript-lambda-as-a-cdk-construct-custom-resource
    https://subaud.io/blog/building-cdk-custom-resource-constructs-with-projen-and-typescript
    


## PowerTools:
    Simplifying serverless best practices with Lambda Powertools: https://aws.amazon.com/blogs/opensource/simplifying-serverless-best-practices-with-lambda-powertools/ 
     
    AWS Lambda Powertools for TypeScript: https://awslabs.github.io/aws-lambda-powertools-typescript/latest/ 
    Inline implimentation Example: https://github.com/aws-samples/serverless-typescript-demo/blob/main/src/api/get-products.ts