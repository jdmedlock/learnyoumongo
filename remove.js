// Program: remove.js
// Author:  Jim Medlock
// Date written: 1/16/2017

'use strict'

/**
This lesson involves removing a document with the given _id.

The database name will be accessible via process.argv[2].

The collection name will be passed as the second argument to your script.

The _id will be passed as the third argument to your script.

-------------------------------------------------------------------------------

## HINTS

To remove a document, one would need to call remove() on the collection.

Ex.

    collection.remove({
      name: 'foo'
    }, callback)

The first argument to remove() is the query.

If your program does not finish executing, you may have forgotten to
close the db. That can be done by calling db.close() after you
have finished.

## Resource

  * http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#remove

*/

const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/" + process.argv[2];

mongo.connect(url, function(err, db) {
  if (err) {
    throw err;
  }

  const users = db.collection(process.argv[3]);
  users.remove({
      _id: process.argv[4]
    }, function(err, data) {
    if (err) {
      throw err;
    }
    db.close();
  });
});