var express = require('express');
var router = express.Router();
var dictionaryCtrl = require('../controller/dictionary.controller');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;

router.route('/')
  .get(dictionaryCtrl.listAllVerbs)
  .post(dictionaryCtrl.addVerbs);

router.route('/:vid')
  .get(dictionaryCtrl.getVerb)
  .put(dictionaryCtrl.updateVerb)
  .delete(dictionaryCtrl.deleteVerb);


module.exports = router;