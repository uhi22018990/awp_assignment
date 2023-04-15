#!/bin/bash

#postgresql
#sudo -i -u postgres
#service postgresql start
#sudo -u postgres createdb testdb
#sudo -u postgres psql --command "alter user postgres with encrypted password 'postgres'"
#sudo -u postgres psql --command "grant all privileges on database testdb to postgres"

# start mongodb
systemctl start mongod

# change directory
#cd /app/src
#npm i

# this line is good for manual start
#npm start
#nohup npm start &

# if you remove this like, the container will exit immediately
sleep infinity