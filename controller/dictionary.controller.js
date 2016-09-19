var Dictionary = require('../models/dictionary.model');
var config = require('../config/config.js');
var log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;


exports.listAllWords = function(req,res){
	console.log('All');
    var perPage = 10;
    var page = Math.max(0, req.params.page);
	Dictionary.find({})
    
    .exec(function(err, words) {
      if(err) {
        return res.status(500).json({
          success: false,
          message:  'Something went wrong. Please try again.',
          data: err
        });
      }

      res.status(200).json({
        success: true,
        message: 'Successfully fetched all words.',
        data: words
      });
    });
};
exports.addWords = function(req,res){
	console.log('Add');
};
exports.getWord = function(req,res){
	console.log('Get');
	Dictionary.findById(req.params.wid, function (err, word) {
		if (err) throw err;
		res.status(200).json({
		  message: 'Word Data',
		  success: true,
		  data : word
		});
	});
};
exports.updateWord = function(req,res){
	console.log('Update');
};
exports.deleteWord = function(req,res){
	console.log('Delete');
};

//verb
exports.listAllVerbs = function(req,res){
  console.log('all verb');
  Dictionary.find({ type : "verb"})
    
    .exec(function(err, verbs) {
      if(err) {
        return res.status(500).json({
          success: false,
          message:  'Something went wrong. Please try again.',
          data: err
        });
      }

      res.status(200).json({
        success: true,
        message: 'Successfully fetched all verbs.',
        data: verbs
      });
    });
};
exports.addVerbs = function(req,res){
  console.log('add verb');
  
};
exports.getVerb = function(req,res){
  console.log('get verb');
  Dictionary.findById(req.params.vid, function (err, verb) {
    if (err) throw err;
    res.status(200).json({
      message: 'Verb Data',
      success: true,
      data : verb
    });
  });
};
exports.updateVerb = function(req,res){
  console.log('Update');
};
exports.deleteVerb = function(req,res){
  console.log('Delete');
};

//adverb
exports.listAllAdverbs = function(req,res){
  console.log('All');
  Dictionary.find({ type : "adverb"})
    
    .exec(function(err, adverbs) {
      if(err) {
        return res.status(500).json({
          success: false,
          message:  'Something went wrong. Please try again.',
          data: err
        });
      }

      res.status(200).json({
        success: true,
        message: 'Successfully fetched all adverbs.',
        data: adverbs
      });
    });
};
exports.addAdverbs= function(req,res){
  console.log('Add');
};
exports.getAdverb = function(req,res){
  console.log('Get adverb');
  Dictionary.findById(req.params.advid, function (err, adverb) {
    if (err) throw err;
    res.status(200).json({
      message: 'Adverb Data',
      success: true,
      data : adverb
    });
  });
};
exports.updateAdverb = function(req,res){
  console.log('Update');
};
exports.deleteAdverb = function(req,res){
  console.log('Delete');
};

//adjective
exports.listAllAdjectives= function(req,res){
  console.log('All adjective');
  Dictionary.find({ type : "adjective"})
    
    .exec(function(err, adjectives) {
      if(err) {
        return res.status(500).json({
          success: false,
          message:  'Something went wrong. Please try again.',
          data: err
        });
      }

      res.status(200).json({
        success: true,
        message: 'Successfully fetched all adjectives.',
        data: adjectives
      });
    });
};
exports.addAdjectives = function(req,res){
  console.log('Add adjective');
}
exports.getAdjective = function(req,res){
  console.log('Get adjective');
  Dictionary.findById(req.params.adjid, function (err, adjective) {
    if (err) throw err;
    res.status(200).json({
      message: 'Adjective Data',
      success: true,
      data : adjective
    });
  });
};

exports.updateAdjective = function(req,res){
  console.log('Update adjective');
};

exports.deleteAdjective = function(req,res){
  console.log('Delete');
};


//pronoun
exports.listAllPronouns= function(req,res){
  console.log('All pronoun');
  Dictionary.find({ type : "pronoun"})
    
    .exec(function(err, pronoun) {
      if(err) {
        return res.status(500).json({
          success: false,
          message:  'Something went wrong. Please try again.',
          data: err
        });
      }

      res.status(200).json({
        success: true,
        message: 'Successfully fetched all pronoun.',
        data: pronoun
      });
    });
};
exports.addPronouns = function(req,res){
  console.log('Add pronoun');
};
exports.getPronoun = function(req,res){
  console.log('get pronoun');
  Dictionary.findById(req.params.proid, function (err, pronoun) {
    if (err) throw err;
    res.status(200).json({
      message: 'Pronoun Data',
      success: true,
      data : pronoun
    });
  });
};
exports.updatePronoun = function(req,res){
  console.log('Update pronoun');
};
exports.deletePronoun = function(req,res){
  console.log('Delete pronoun');
};

// preposition
exports.listAllPrepositions= function(req,res){
  console.log('All preposition');
  Dictionary.find({ type : "preposition"})
    
    .exec(function(err, preposition) {
      if(err) {
        return res.status(500).json({
          success: false,
          message:  'Something went wrong. Please try again.',
          data: err
        });
      }

      res.status(200).json({
        success: true,
        message: 'Successfully fetched all preposition.',
        data: preposition
      });
    });
};
exports.addPrepositions = function(req,res){
  console.log('Add preposition');
};
exports.getPreposition = function(req,res){
  console.log('Get preposition');
  Dictionary.findById(req.params.preid, function (err, preposition) {
    if (err) throw err;
    res.status(200).json({
      message: 'Preposition Data',
      success: true,
      data : preposition
    });
  });
};
exports.updatePreposition = function(req,res){
  console.log('Update preposition');
};
exports.deletePreposition = function(req,res){
  console.log('Delete preposition');
};

// determiner
exports.listAllDeterminers= function(req,res){
  console.log('All determiner');
  Dictionary.find({ type : "determiner"})
    
    .exec(function(err, determiner) {
      if(err) {
        return res.status(500).json({
          success: false,
          message:  'Something went wrong. Please try again.',
          data: err
        });
      }

      res.status(200).json({
        success: true,
        message: 'Successfully fetched all determiner.',
        data: determiner
      });
    });
};
exports.addDeterminers = function(req,res){
  console.log('Add determiner');
};
exports.getDeterminer = function(req,res){
  console.log('Get determiner');
  Dictionary.findById(req.params.detid, function (err, determiner) {
    if (err) throw err;
    res.status(200).json({
      message: 'Determiner Data',
      success: true,
      data : determiner
    });
  });
};
exports.updateDeterminer = function(req,res){
  console.log('Update determiner');
};
exports.deleteDeterminer = function(req,res){
  console.log('Delete determiner');
};

//noun
exports.listAllNoun = function(req,res){
  console.log('All noun');
  Dictionary.find({ type : "noun"})
    
    .exec(function(err, noun) {
      if(err) {
        return res.status(500).json({
          success: false,
          message:  'Something went wrong. Please try again.',
          data: err
        });
      }

      res.status(200).json({
        success: true,
        message: 'Successfully fetched all noun.',
        data: noun
      });
    });
};
exports.addNoun = function(req,res){
  console.log('Add noun');
};
exports.getNoun = function(req,res){
  console.log('Get noun');
  Dictionary.findById(req.params.nid, function (err, noun) {
    if (err) throw err;
    res.status(200).json({
      message: 'Noun Data',
      success: true,
      data : noun
    });
  });
};
exports.updateNoun = function(req,res){
  console.log('Update noun');
};
exports.deleteNoun = function(req,res){
  console.log('Delete noun');
};

