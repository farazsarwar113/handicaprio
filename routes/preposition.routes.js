var express = require('express');
var router = express.Router();
var dictionaryCtrl = require('../controller/dictionary.controller');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;

router.route('/')
  .get(dictionaryCtrl.listAllPrepositions)
  .post(dictionaryCtrl.addPrepositions);

router.route('/:prepid')
  .get(dictionaryCtrl.getPreposition)
  .put(dictionaryCtrl.updatePreposition)
  .delete(dictionaryCtrl.deletePreposition);


module.exports = router;