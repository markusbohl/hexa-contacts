#!/usr/bin/env bash

mkdir release
cp -R dist/ release/
cp .deployment release/
cp deploy.sh release/
cp package.json release/

cd release
git init
git add -A
git -c user.name=$GIT_USERNAME -c user.email=$GIT_EMAIL commit -m "Auto-Deployment: $TRAVIS_BRANCH $TRAVIS_COMMIT"
git remote add azure https://$AZURE_WA_USERNAME:$AZURE_WA_PASSWORD@$AZURE_WA_SITE.scm.azurewebsites.net/$AZURE_WA_SITE.git
git push -f -q azure master

cd ..
rm -rf release
