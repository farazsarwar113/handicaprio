var express = require('express');
var router = express.Router();
var dictionaryCtrl = require('../controller/dictionary.controller');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;

router.route('/')
  .get(dictionaryCtrl.listAllDeterminers)
  .post(dictionaryCtrl.addDeterminers);

router.route('/:detid')
  .get(dictionaryCtrl.getDeterminer)
  .put(dictionaryCtrl.updateDeterminer)
  .delete(dictionaryCtrl.deleteDeterminer);


module.exports = router;