#!/usr/bin/env bash

echo 'mkdir release'
mkdir release
echo 'cp stuff into release'
cp -R dist/ release/
cp .deployment release/
cp deploy.sh release/
cp package.json release/


echo 'cd release'
cd release
echo 'git init'
git init
echo 'git add -A'
git add -A
echo 'git commit'
git -c user.name=$GIT_USERNAME -c user.email=$GIT_EMAIL commit -m "Auto-Deployment: $TRAVIS_BRANCH $TRAVIS_COMMIT"
echo 'git remote add azure'
git remote add azure https://$AZURE_WA_USERNAME:$AZURE_WA_PASSWORD@$AZURE_WA_SITE.scm.azurewebsites.net/$AZURE_WA_SITE.git
echo 'git push'
git push -f -q azure master

echo 'rm release'
cd ..
rm -rf release
