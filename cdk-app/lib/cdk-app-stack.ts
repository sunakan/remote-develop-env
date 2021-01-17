import * as cdk from '@aws-cdk/core'
import * as ec2 from '@aws-cdk/aws-ec2'

export class CdkAppStack extends cdk.Stack {
  public readonly vpc: ec2.Vpc
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    // VPCの作成
    this.vpc = this.createVpc()
  }

  private createVpc() {
    return new ec2.Vpc(this, 'development-vpc', {
      cidr: '10.0.0.0/16',
      natGateways: 0, // NatGatewayの数
      maxAzs: 3, // AZの数
      subnetConfiguration: [
        { name: 'public', cidrMask: 24, subnetType: ec2.SubnetType.PUBLIC },
        {
          name: 'isolated',
          cidrMask: 24,
          subnetType: ec2.SubnetType.ISOLATED,
        },
      ],
    })
  }
}
