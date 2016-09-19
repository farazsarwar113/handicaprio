var express = require('express');
var router = express.Router();
var dictionaryCtrl = require('../controller/dictionary.controller');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;

router.route('/')
  .get(dictionaryCtrl.listAllWords)
  .post(dictionaryCtrl.addWords);

router.route('/:wid')
  .get(dictionaryCtrl.getWord)
  .put(dictionaryCtrl.updateWord)
  .delete(dictionaryCtrl.deleteWord);

module.exports = router;