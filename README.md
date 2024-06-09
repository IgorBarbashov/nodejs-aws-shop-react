# React-shop-cloudfront

## Deployment
- [S3 manual Deployment](http://rss-aws-cloud-developer-task-2.s3-website-eu-west-1.amazonaws.com)
- CloudFront manual deployment
- [S3 automated deployment](http://rss-aws-cloud-developer-task-2-automated-deploy.s3-website-eu-west-1.amazonaws.com/)
- CloudFront automated deployment

This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `deploy`

Deploy the project on AWS.

### `destroy`

Destroys the AWS deployment.

### `release`

Builds the project for production in `dist` folder and deploy it on AWS.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.

## Prepare environment for automated deployment using AWS CDK
- install the AWS CDK globally (once) `npm install -g aws-cdk`
- go to the `cdk_js` folder
- bootstrap your environment (once) `cdk bootstrap aws://YOUR-ACCOUNT-NUMBER/YOUR-DEFAULT-REGION`
  - the following commands display your account number and region `aws sts get-caller-identity`, `aws configure get region`
- install dependencies for CDK `npm install`