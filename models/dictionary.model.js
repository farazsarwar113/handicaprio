'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DictionarySchema = new Schema({
	word : String,
	type : String
});

module.exports = mongoose.model('Dictionary' , DictionarySchema);