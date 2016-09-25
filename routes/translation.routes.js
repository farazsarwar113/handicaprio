var express = require('express');
var router = express.Router();
var translationCtrl = require('../controller/translation.controller');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;

router.route('/')
  .post(translationCtrl.translate);

module.exports = router;