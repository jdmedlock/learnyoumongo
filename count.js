// Program: count.js
// Author:  Jim Medlock
// Date written: 1/16/2017

'use strict'

/**
Here we will learn how to count the number of documents that
meet certain criteria.

Use the parrots collection from the database named learnyoumongo to
count all documents where age is greater than the first argument
passed to your script.

Using console.log, print the number to stdout.

-------------------------------------------------------------------------------

## HINTS

To count the number of documents meeting certain criteria,
we must use the collection.count() function.

Here is an example:

    collection.count({
      name: 'foo'
    }, function(err, count) {
    
    })

If your program does not finish executing, you may have forgotten to
close the db. That can be done by calling db.close() after you
have finished.

## Resource

  * http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#count

*/

const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db) {
  if (err) {
    throw err;
  }

  const ageToCheck = process.argv[2];
  const parrots = db.collection("parrots");
  parrots.count({age: {$gt : +ageToCheck}}, function(err, count) {
    if (err) {
      throw err;
    }
    console.log(count);
    db.close();
  });
});