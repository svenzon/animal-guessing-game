var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animal-app', function(err, db){
    if(err) throw err;

    var collection = db.collection('animals');
    collection.find({}).toArray(function(err, result){
        
    })
});