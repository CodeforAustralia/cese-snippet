#!/bin/sh

echo 'Opening client and building... \n'
cd client && yarn build

echo 'Current working directory: '
pwd

cd ../

echo 'Current working directory: '
pwd
echo 'Copying files to server/public: '

cp -a ./client/build/. ./server/public/

echo 'Deploying to Heroku'

heroku container:push web --recursive

echo 'Done.'