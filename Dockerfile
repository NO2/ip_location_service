FROM node:10-buster

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN wget https://geolite.maxmind.com/download/geoip/database/GeoLite2-City.tar.gz && \
  tar -xzf GeoLite2-City.tar.gz && \
  mv GeoLite2-City*/GeoLite2-City.mmdb ./data/ && \
  rm -rf GeoLite2-City*

EXPOSE 8080

CMD [ "npm", "start" ]
