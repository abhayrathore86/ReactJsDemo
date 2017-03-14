'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var authorSchema = new Schema({
 id: String,
 firstName: String,
 lastName: String,
 age: Number
}, { versionKey: false });
//export our module to use in server.js
module.exports = mongoose.model('AuthorData', authorSchema);