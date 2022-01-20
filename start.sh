#!/bin/bash

source ./functions.sh

echo "Starting deployment..."
echo ""
echo "Checking your AWS login..."

if [ -z "$AWS_PROFILE" ]; then
    exit_on_error "No aws profile set. Please export the aws profile with the following command: export AWS_PROFILE=<your profile>"
fi

aws sts get-caller-identity 2> /dev/null || exit_on_error "Invalid AWS credentials. Please connect with AWS and export the correct AWS_PROFILE in your command line"

echo "Using the following credentials to enter exxeta references: ${BID_USERNAME} / ${BID_PASSWORD}"

pushd app
    echo -n "Deploying... "
    npm i --silent
    npx cdk bootstrap
    npx cdk synth
    npx cdk deploy --require-approval never
    echo "✅"
popd

S3_BUCKET_NAME="$(aws cloudformation list-exports --region=eu-central-1 | jq -r '.Exports[] | select(.Name == "exxeta-aws-bid-s3-name") | .Value')"
S3_BUCKET_URL="$(aws cloudformation list-exports --region=eu-central-1 | jq -r '.Exports[] | select(.Name == "exxeta-aws-bid-s3-url") | .Value')"

## The Frontend APP needs the endpoint of the API gateway - write config.js on S3 bucket
API_ENDPOINT="$(aws cloudformation list-exports --region=eu-central-1 | jq -r '.Exports[] | select(.Name == "exxeta-aws-bid-endpoint") | .Value')"
echo "{\"endpoint\":\"${API_ENDPOINT}\"}" > ./config.json
aws s3 cp ./config.json s3://${S3_BUCKET_NAME}

# Final output
echo ""
echo ""
echo "✅ Deployment finished. You can find the references and profiles here: 👉 ${S3_BUCKET_URL} 👈"


