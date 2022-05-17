#!/usr/bin/env bash

echo "Starting prebuild process"

USER_SET_BRANCH=$1

DETECTED_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
BRANCH="${USER_SET_BRANCH:-$DETECTED_BRANCH}"

echo ${GATSBY_PROD_API}

Set branch on which the CMS edits files by creating
the netlify config from the netlify-cms-config and overwrite
the branch setting.
if [[ $BRUNCH = "main" ]]
then
  sed -i -e "s|_GATSBY_API|${GATSBY_PROD_API}|g" .env
else
  sed -i -e "s|_GATSBY_API|${GATSBY_QA_API}|g" .env  #путь до файла с урлами
fi

sed -i -e "s|GATSBY_CMS_BRANCH|$BRANCH|g" ./static/admin/config.yml

cat netlify.toml