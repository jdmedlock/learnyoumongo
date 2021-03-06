// Program: find.js
// Author:  Jim Medlock
// Date written: 1/16/2017

'use strict'

// Here we will learn how to search for documents.
// 
// In this exercise the database name is learnyoumongo.
// So, the url would be something like: mongodb://localhost:27017/learnyoumongo
// 
// Use the parrots collection to find all documents where age
// is greater than the first argument passed to your script.
// 
// Using console.log, print the documents to stdout.
// 
// -------------------------------------------------------------------------------
// 
// ## HINTS
// 
// To connect to the database, one can use something like this:
// 
//     var mongo = require('mongodb').MongoClient
//     mongo.connect(url, function(err, db) {
//       // db gives access to the database
//     })
// 
// To get a collection, one can use db.collection('<collection name>').
// 
// To find a document or documents, one needs to call find() on the collection.
// 
// Find is a little bit different than what we are used to seeing.
// 
// To access the arguments you can use the process.argv array of strings (the 
// first argument is stored at the third position process.argv[2]). 
// To convert to an integer, you could use parseInt()
// 
// Here is an example:
// 
//     collection.find({
//       name: 'foo'
//     }).toArray(function(err, documents) {
//     
//     })
// 
// If your program does not finish executing, you may have forgotten to
// close the db. That can be done by calling db.close() after you
// have finished.
// 
// ## Resources:
// 
//   * http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo"

mongo.connect(url, function(err, db) {
    const ageToCheck = process.argv[2];
    const parrots = db.collection("parrots");
    parrots.find({age: {$gt : +ageToCheck}}).toArray(function(err, documents) {
        console.log(documents);
    });
    db.close();
});
