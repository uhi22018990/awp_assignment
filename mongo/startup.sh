#!/bin/bash

# start mongodb
systemctl start mongod

# drop and reimport data
mongosh \
  --quiet \
  --eval 'use questions' \
  --eval 'db.questions.drop()' \
  --eval 'use questions' \
  --eval 'db.questions.insertMany([
      {
      "id": 1,
      "qtype": "q",
      "urltitle": "bin_search",
      "fulltitle": "Binary Search",
      "qtext": "This is some question text about binary search, isn t it?",
      "metadata":
        {"answers": [
          {"text": "Yes", "correct": true},
          {"text": "No", "correct": false},
          {"text": "Maybe", "correct": false},
          {"text": "All of the above", "correct": false}
        ]
      }
    },

    {
      "id": 2,
      "qtype": "q",
      "urltitle": "avl_trees",
      "fulltitle": "AVL Trees",
      "qtext": "This is some question text about AVL Trees, isn t it?",
      "metadata":
        {"answers": [
          {"text": "Yes", "correct": true},
          {"text": "No", "correct": false},
          {"text": "Maybe", "correct": false},
          {"text": "All of the above", "correct": false}
        ]
      }
    },
    {
      "id": 3,
      "qtype": "q",
      "urltitle": "java_types",
      "fulltitle": "Java Types",
      "qtext": "This is some question text about Java types, isn t it?",
      "metadata":
        {"answers": [
          {"text": "Yes", "correct": true},
          {"text": "No", "correct": false},
          {"text": "Maybe", "correct": false},
          {"text": "All of the above", "correct": false}
        ]
      }
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
