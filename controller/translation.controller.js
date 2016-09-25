var Dictionary = require('../models/dictionary.model');
var config = require('../config/config.js');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;
var retext = require('retext');
var simplify = require('retext-simplify');
var equality = require('retext-equality');
var report = require('vfile-reporter');

exports.translate = function(req,res){
	log(req.body);
	var text = retext()
			  .use(simplify)
			  .use(equality)
			  .process(req.body.word, function (err, file) {
			    console.log(String(file));
			    console.error('err',report(err));
			    console.error('file',report(file));
			  });

	console.log(text);
	if(text.messages){
		console.log('MESSAGE',text.messages);
		var reasons = [];
		for(var i=0; i< text.messages.length; i++){
			var obj = {
				reason: text.messages[i].reason
			}
			reasons.push(obj);
		}
		log(reasons);
	}
	var str = req.body.word;
	var tokenArray = str.split(/\b(\s)/);
	log(tokenArray);

	res.status(200).json({
		success: true,
		message: 'Successfully translated sentence.',
		data: {
			warning: reasons,
			tokens: tokenArray
		}
	});


};