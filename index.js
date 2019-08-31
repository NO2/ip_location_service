const express = require('express');
const app = express();
const Reader = require('@maxmind/geoip2-node').Reader;

const options = {
  cache: {
    max: 1000,
  },
};

app.use(express.json());

Reader.open('data/GeoLite2-City.mmdb', options).then((reader) => {
  app.get('/location', function(req, res) {
    const ip = req.query ? req.query.ip : null;
    if (ip) {
      try {
        const response = reader.city(ip);
        res.status(200).json(response.location || {});
      } catch (err) {
        res.status(404).json({});
      }
    } else {
      res.status(400).json({});
    }
  });

  app.get('/', function(req, res) {
    res.send('IP Location Service');
  });

  app.listen(8080);
});
