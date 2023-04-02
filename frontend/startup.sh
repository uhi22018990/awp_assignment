#!/bin/bash

# change directory
cd /app/src
npm i

# this line is good for manual start
#npm start
nohup npm start &

sleep infinity