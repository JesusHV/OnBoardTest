'use strict';
/**
 *
 * Dependencies
 *
 */
const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const corser     = require('corser');
const config     = require('./config/server');
const request    = require('request');
const router     = express.Router();
/**
 * Define server listen port
 */
app.set('port', (process.env.PORT || config.server.port));
/**
 * Parser json request server
 */
app.use(bodyParser.json({ extended: true }));
/**
 * Corser allow all origins
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "api-twets.herokuapp.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static('./public'));
/**
 * Endpoints
 */
 app.get('/api/restaurants', (req, res) => {
  return request({ 
    url: config.api.staticEndpoint,
    json: true
  }, (err, result) => {
    if (err)
      return res.send(500, err);
    res.send(result);
  });
})
/**
 * Frontend endpoints
 */
app.get('/*',  (req, res) => {
  res.sendFile('./index.html', {"root": __dirname + '/public'});
});

app.listen(app.get('port'), (err) => {
  if(!err){
    console.log(`Server listen on port: ${app.get('port')}`);
  }
})