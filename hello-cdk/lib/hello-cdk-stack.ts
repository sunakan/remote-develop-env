import * as cdk from '@aws-cdk/core'
import * as s3 from '@aws-cdk/aws-s3'

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    new s3.Bucket(this, 'sunakan-20210116', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })
  }
}
