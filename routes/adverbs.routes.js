var express = require('express');
var router = express.Router();
var dictionaryCtrl = require('../controller/dictionary.controller');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;

router.route('/')
  .get(dictionaryCtrl.listAllAdverbs)
  .post(dictionaryCtrl.addAdverbs);

router.route('/:advid')
  .get(dictionaryCtrl.getAdverb)
  .put(dictionaryCtrl.updateAdverb)
  .delete(dictionaryCtrl.deleteAdverb);

module.exports = router;