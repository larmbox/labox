#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'Deploy'

git push -f https://github.com/larmbox/labox master:gh-pages

cd -
