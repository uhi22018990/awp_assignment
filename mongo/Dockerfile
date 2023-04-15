# Download base image ubuntu latest
FROM ubuntu:20.04

ENV TZ=UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get -y install sudo vim curl gnupg systemctl

# Mongodb
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
RUN /bin/echo -e "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
RUN apt-get -y update
RUN apt-get -y install nodejs wget mongodb-org

RUN mkdir app
COPY . ./app
RUN chmod 777 ./app/startup.sh

RUN cd ./app

CMD ["./app/startup.sh"]


EXPOSE 5000