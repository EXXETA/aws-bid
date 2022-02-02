import { CorsHttpMethod, HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';
import { Runtime, Function, Code, AssetCode } from '@aws-cdk/aws-lambda';
import { Bucket } from '@aws-cdk/aws-s3';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';
import { Construct, Stack, StackProps, RemovalPolicy, CfnOutput } from '@aws-cdk/core';
import * as path from 'path';

export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'exxeta-cloud-bid-' + id, {
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html"
    });

    const deployment = new BucketDeployment(this, "deployStaticWebsite", {
      sources: [Source.asset("../website/dist/aws-bid")],
      destinationBucket: bucket,
    });

    const proxyFunction = new Function(this, 'exxeta-proxy-function', {
      runtime: Runtime.NODEJS_14_X,
      code: new AssetCode('../lambda/dist'),
      handler: 'handler.handler',
      environment: {
        API_ENDPOINT: `https://nexus.exxeta.info/repository/exxeta-raw-group/exxeta/${process.env.BID_USERNAME || ''}/${process.env.BID_FILE || 'references'}.json`,
        API_USER: process.env.BID_USERNAME || '',
        API_PASSWORD: process.env.BID_PASSWORD || '',
      }
    });

    const apiGateway = new HttpApi(this, 'exxeta-api', {
      corsPreflight: {
        allowOrigins: [bucket.bucketWebsiteUrl, 'http://localhost:4200'],
        allowMethods: [CorsHttpMethod.GET],
      }
    });

    const lambdaIntegration = new HttpLambdaIntegration('exxeta-proxy-integration', proxyFunction);

    apiGateway.addRoutes({
      integration: lambdaIntegration,
      path: '/',
      methods: [HttpMethod.GET],
    })

    new CfnOutput(this,`api-gw-endpoint`, {
      exportName: `exxeta-aws-bid${process.env.BID_SUFFIX || ''}-endpoint`,
      value: apiGateway.apiEndpoint,
    });
    new CfnOutput(this,`s3-bucket-url`, {
      exportName: `exxeta-aws-bid${process.env.BID_SUFFIX || ''}-s3-url`,
      value: bucket.bucketWebsiteUrl,
    });
    new CfnOutput(this,`s3-bucket-name`, {
      exportName: `exxeta-aws-bid${process.env.BID_SUFFIX || ''}-s3-name`,
      value: bucket.bucketName,
    });
  }
}
