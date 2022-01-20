#!/bin/bash

pushd website
    echo -n "Build website... "
    npm i --silent
    npx ng build
    echo "✅"
popd

pushd lambda
    echo -n "Build Lambda... "
    npm i --silent
    npm run build
    echo "✅"
popd