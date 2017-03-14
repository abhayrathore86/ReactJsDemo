'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//This file is mocking a web API by hitting hard coded data.
var authors = []; /* = require('./authorData').authors*/
//var test=require('./authorData').authors;
var _ = require('lodash');

_axios2.default.get('http://localhost:3001/api/data').then(function (response) {
	authors = response.data;
	//console.log(authors);
});

var AuthorApi = {
	getAllAuthors: function getAllAuthors() {
		// alert('h');
		//var test= _clone(authors);
		console.log(test);
		return authors;
	},

	saveAuthor: function saveAuthor(author) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');

		if (author.id) {
			var existingAuthorIndex = _.indexOf(authors, _.find(authors, { id: author.id }));
			authors.splice(existingAuthorIndex, 1, author);
		} else {
			authors.push(author);
		}

		return author;
	},

	deleteAuthor: function deleteAuthor(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(authors, { id: id });
	}
};

module.exports = AuthorApi;

//# sourceMappingURL=authorApi-compiled.js.map