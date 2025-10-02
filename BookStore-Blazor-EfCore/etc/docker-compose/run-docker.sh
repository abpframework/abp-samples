#!/bin/bash

if [[ ! -d certs ]]
then
    mkdir certs
    cd certs/
    if [[ ! -f localhost.pfx ]]
    then
        dotnet dev-certs https -v -ep localhost.pfx -p dfd2467f-4707-4a24-b4f7-51a503baacd0 -t
    fi
    cd ../
fi

docker-compose up -d
