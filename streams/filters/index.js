var chalk = require('chalk');
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/tweets'

var streamFilter = function (tweet) {
	console.log(chalk.green(tweet.text));
	
	mongo.connect(url, function (err, db) {
		assert.equal(null, err);
		db.collection('tweetdata').insertOne(tweet, function (err, result) {
			assert.equal(null, err);
			db.close();
			console.log('tweet inserted');
		})
	})
/*
	mongo.connect(url, function (err, db) {
		var resultArray = [];
		assert.equal(null, err);
		var cursor = db.collection('tweet-data').find();
		cursor.forEach(function (doc, err) {
			assert.equal(null, err);
			resultArray.push(doc);
		}, function () {
			db.close();
			console.log(resultArray);
		})
	})

	*/
};

module.exports = streamFilter;