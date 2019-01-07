var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("Products", function(err, res) {
    if (err) throw err;
    //console.log("Collection created!");
    db.close();
  });
  dbo.createCollection("Orders", function(err, res) {
    if (err) throw err;
    console.log("2 Collection created!");
    db.close();
  });
});
