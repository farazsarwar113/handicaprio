var express = require('express');
var router = express.Router();
var dictionaryCtrl = require('../controller/dictionary.controller');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;

router.route('/')
  .get(dictionaryCtrl.listAllAdjectives)
  .post(dictionaryCtrl.addAdjectives);

router.route('/:adjid')
  .get(dictionaryCtrl.getAdjective)
  .put(dictionaryCtrl.updateAdjective)
  .delete(dictionaryCtrl.deleteAdjective);

module.exports = router;