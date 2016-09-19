var express = require('express');
var router = express.Router();
var dictionaryCtrl = require('../controller/dictionary.controller');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;

router.route('/')
  .get(dictionaryCtrl.listAllPronouns)
  .post(dictionaryCtrl.addPronouns);

router.route('/:proid')
  .get(dictionaryCtrl.getPronoun)
  .put(dictionaryCtrl.updatePronoun)
  .delete(dictionaryCtrl.deletePronoun);



module.exports = router;