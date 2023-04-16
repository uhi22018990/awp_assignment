#!/bin/bash

# start mongodb
systemctl start mongod

# drop and reimport data
mongosh \
  --quiet \
  --eval 'use answers' \
  --eval 'db.answers.drop()' \
  --eval 'use answers' \
  --eval 'db.answers.insertMany([
      {
        "urltitle": "bin_search",
        "answers": [
          {"text": "Yes", "correct": true},
          {"text": "No", "correct": false},
          {"text": "Maybe", "correct": false},
          {"text": "All of the above", "correct": false}
        ]
      },
      {
        "urltitle": "avl_trees",
        "answers": [
          {"text": "Yes", "correct": true},
          {"text": "No", "correct": false},
          {"text": "Maybe", "correct": false},
          {"text": "All of the above", "correct": false}
        ]
      },
      {
        "urltitle": "java_types",
        "answers": [
          {"text": "Yes", "correct": true},
          {"text": "No", "correct": false},
          {"text": "Maybe", "correct": false},
          {"text": "All of the above", "correct": false}
        ]
      }
    ])' \
  mongodb://localhost/

# change directory and install all the dependencies
cd /app/src
npm i

# this line is good for manual start
#npm start

# start
nohup npm start &

# if you remove this like, the container will exit immediately
sleep infinity
