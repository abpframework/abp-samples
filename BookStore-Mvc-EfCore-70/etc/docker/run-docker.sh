#!/bin/bash

if [[ ! -d certs ]]
then
    mkdir certs
    cd certs/
    if [[ ! -f localhost.pfx ]]
    then
        dotnet dev-certs https -v -ep localhost.pfx -p 91f91912-5ab0-49df-8166-23377efaf3cc -t
    fi
    cd ../
fi

docker-compose up -d
