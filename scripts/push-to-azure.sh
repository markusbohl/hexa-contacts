#!/usr/bin/env bash

git remote add azure https://mb-azure-deployment-user:$AZURE_DEPLOYMENT_PASSWORD@mb-hexa-contacts.scm.azurewebsites.net:443/mb-hexa-contacts.git
git push azure master
