require('dotenv').config();
var s3 = require( 'multer-storage-s3' );
var AWS = require('aws-sdk');
var awsS3 = new AWS.S3();
var multer = require('multer');
var mime = require('mime');

var Dictionary = require('../models/dictionary.model');
var config = require('../config/config.js');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;
var retext = require('retext');
var simplify = require('retext-simplify');
var equality = require('retext-equality');
var report = require('vfile-reporter');
var cfg = require('nlp_compromise');
var ffmpeg = require('fluent-ffmpeg');
var ffprobe = require('ffprobe');
var ffprobeStatic = require('ffprobe-static');
log(ffprobeStatic.path);
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
ffmpeg.setFfmpegPath(ffmpegPath);
const ffprobePath = require('@ffprobe-installer/ffprobe').path;
ffmpeg.setFfprobePath(ffprobePath);

//var ffmpeg = require('ffmpeg');

var command = ffmpeg();

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
	var tokenArray = str.split(/\b[ ,;:]+/);
	log(tokenArray);

	var word = tokenArray.join(" ");
	log(word);
	var text = cfg.sentence(word);
 	console.log(text.tags());
 	var pos = text.tags();

 	ffmpeg()
	  .input('video/ample.mp4')
	  .input('video/amplify.mp4')
	  .on('error', function(err) {
	  	log(err);
	    console.log('An error occurred: ' + err);
	  })
	  .on('end', function() {
	    console.log('Merging finished !');
	  })
	  .mergeToFile('video/merge/merged.avi', 'video/merge');

	res.status(200).json({
		success: true,
		message: 'Successfully translated sentence.',
		data: {
			warning: reasons,
			tokens: tokenArray,
			pos: pos
		}
	});


};