var express = require('express');
var router = express.Router();
var dictionaryCtrl = require('../controller/dictionary.controller');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;

router.route('/')
  .get(dictionaryCtrl.listAllNoun)
  .post(dictionaryCtrl.addNoun);

router.route('/:nid')
  .get(dictionaryCtrl.getNoun)
  .put(dictionaryCtrl.updateNoun)
  .delete(dictionaryCtrl.deleteNoun);


module.exports = router;