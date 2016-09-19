var express = require('express');

var dictionary =  require('./dictionary.routes.js');
var verbs =  require('./verb.routes.js');
var noun =  require('./noun.routes.js');
var pronoun =  require('./pronoun.routes.js');
var adverbs =  require('./adverbs.routes.js');
var adjective =  require('./adjective.routes.js');
var determiner =  require('./determiner.routes.js');
var preposition =  require('./preposition.routes.js');

var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;
var Dictionary = require('../models/dictionary.model.js');
var config = require('../config/config');

module.exports = function (app) {
  var router = express.Router();

  router.use('/dictionary',dictionary);
  router.use('/verbs',verbs);
  router.use('/noun',noun);
  router.use('/pronoun',pronoun);
  router.use('/adverbs',adverbs);
  router.use('/adjective',adjective);
  router.use('/determiner',determiner);
  router.use('/preposition',preposition);

  app.use('/api', router);

};

