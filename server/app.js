var MongoClient = require('mongodb').MongoClient

var URL = 'mongodb://localhost:27017/userdata'

MongoClient.connect(URL, function(err, db) {
  if (err) return

  var collection = db.collection('user')
  collection.insert({name: 'taco', tasty: true}, function(err, result) {
    collection.find({name: 'taco'}).toArray(function(err, docs) {
      console.log(docs[0])
      db.close()
    })
  })
})
