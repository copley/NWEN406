https://github.com/mehemken/docker-flask-postgres
```
alias fig="docker-compose"

docker-compose up --build -d   #Run the container

fig down   #Stop and remove everything



#!/bin/bash
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)