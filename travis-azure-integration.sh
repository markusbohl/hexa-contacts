#!/usr/bin/env bash

$GIT_USER = $1
$GIT_EMAIL = $2
$AZURE_USER = $3
$AZURE_PASSWORD = $4
$AZURE_SITE = $5

mkdir release
cp -R dist/ release/
cp .deployment release/
cp deploy.sh release/
cp package.json release/

cd release
git init
git add -A
git -c user.name=$GIT_USER -c user.email=$GIT_EMAIL commit -m "Auto-Deployment: $TRAVIS_BRANCH $TRAVIS_COMMIT"
git remote add azure https://$AZURE_USER:$AZURE_PASSWORD@$AZURE_SITE.scm.azurewebsites.net/$AZURE_SITE.git
git push -f -q azure master

cd ..
rm -rf release
