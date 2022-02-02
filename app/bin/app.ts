#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { AppStack } from '../lib/app-stack';

const app = new App();
new AppStack(app, `exxeta-aws-bid${process.env.BID_SUFFIX || ''}`, {
  env: {
    region: 'eu-central-1',
  },
});