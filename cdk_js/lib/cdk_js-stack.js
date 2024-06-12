const {Stack, RemovalPolicy} = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');
const s3deploy = require('aws-cdk-lib/aws-s3-deployment');

class CdkJsStack extends Stack {
    /**
     *
     * @param {Construct} scope
     * @param {string} id
     * @param {StackProps=} props
     */
    constructor(scope, id, props) {
        super(scope, id, props);

        // Create S3 bucket
        const bucket = new s3.Bucket(this, "rss-aws-cloud-developer-module-2-automated", {
            bucketName: "rss-aws-cloud-developer-module-2-automated",
            websiteIndexDocument: "index.html",
            websiteErrorDocument: "index.html",
            publicReadAccess: true,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
            autoDeleteObjects: true,
            removalPolicy: RemovalPolicy.DESTROY,
        });

        // Deploy to S3 bucket
        new s3deploy.BucketDeployment(this, "rss-aws-cloud-developer-module-2-automated-Deployment", {
            sources: [s3deploy.Source.asset("../dist")],
            destinationBucket: bucket,
        });
    }
}

module.exports = {CdkJsStack}
