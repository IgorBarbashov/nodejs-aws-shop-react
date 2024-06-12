const {Stack, RemovalPolicy, CfnOutput} = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');
const s3deploy = require('aws-cdk-lib/aws-s3-deployment');
const cloudfront = require('aws-cdk-lib/aws-cloudfront');
const iam = require('aws-cdk-lib/aws-iam');

class CdkJsStack extends Stack {
    /**
     *
     * @param {Construct} scope
     * @param {string} id
     * @param {StackProps=} props
     */
    constructor(scope, id, props) {
        super(scope, id, props);

        const cloudfrontOAI = new cloudfront.OriginAccessIdentity(this, 'OAI');

        const bucket = new s3.Bucket(this, 'rss-aws-cloud-developer-module-2-automated', {
            bucketName: 'rss-aws-cloud-developer-module-2-automated',
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: 'index.html',
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            autoDeleteObjects: true,
            removalPolicy: RemovalPolicy.DESTROY,
        });

        bucket.addToResourcePolicy(
            new iam.PolicyStatement({
                actions: ['S3:GetObject'],
                resources: [bucket.arnForObjects('*')],
                principals: [
                    new iam.CanonicalUserPrincipal(
                        cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId
                    ),
                ],
            })
        );

        const distribution = new cloudfront.CloudFrontWebDistribution(
            this,
            'rss-aws-cloud-developer-module-2-automated-Distribution',
            {
                originConfigs: [
                    {
                        s3OriginSource: {
                            s3BucketSource: bucket,
                            originAccessIdentity: cloudfrontOAI,
                        },
                        behaviors: [
                            {
                                isDefaultBehavior: true,
                            },
                        ],
                    },
                ],
            }
        );

        new s3deploy.BucketDeployment(this, 'rss-aws-cloud-developer-module-2-automated-Deployment', {
            sources: [s3deploy.Source.asset('../dist')],
            destinationBucket: bucket,
            distribution: distribution,
            distributionPaths: ['/*'],
        });

        new CfnOutput(this, 'Bucket', {value: bucket.bucketName});

        new CfnOutput(this, 'DistributionId', {
            value: distribution.distributionId,
        });
    }
}

module.exports = {CdkJsStack}
