# IP Location Service

A simple web service written in NodeJS + Express using Maxmind's geolite2
database.

## Running
Just install the dependencies.

    npm install

Download the database [file](https://geolite.maxmind.com/download/geoip/database/GeoLite2-City.tar.gz), extract and place it in the data directory.

Run the service.

    npm start

Send a get request to `localhost:8080/location` with the query parameter `ip` for the ip you want to search.

## Docker
The docker image pulls the database file.
