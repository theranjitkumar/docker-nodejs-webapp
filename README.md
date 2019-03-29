## Docker | nodejs app

### DOCKER IMAGE: docker pull theranjitkumar/mynodeapp
    https://hub.docker.com/r/theranjitkumar/mynodeapp 
    

### Dockerfile

    FROM node:8

    WORKDIR /app

    COPY package.json /app

    RUN npm install

    COPY . /app

    CMD node server.js

    EXPOSE 3000

## Docker commands:
### To build:
    sudo docker build -t (your docker user name)/mynodeapp(this is your docker app name) .
### To run:
    sudo docker run -p 3000:3000 -d (your docker user name)/mynodeapp
### To login Docker
    sudo docker login
### To push
    sudo docker push (your docker user name)/mynodeapp
###    other cmd
    sudo docker ps
    sudo docker image
