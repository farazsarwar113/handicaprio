var config = require('../config/config');
var mongoose = require('mongoose');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;

exports.connect = function (){
  mongoose.connect(config.mongoUrl);
  var db = mongoose.connection;
  var seedDB = false;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    // we're connected!
    log("MongoDB connected on "+ config.mongoUrl);
    log("###########################################################################");
  });
  if(seedDB) { 
      console.log('seed');
      require('./seed.js'); }
    else{
        console.log('No seed');
    }
};

