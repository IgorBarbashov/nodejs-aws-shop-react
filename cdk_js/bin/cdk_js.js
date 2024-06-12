#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const {CdkJsStack} = require('../lib/cdk_js-stack');

const app = new cdk.App();
new CdkJsStack(app, 'CdkJsStack', {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
    },
});
