const { Db } = require('mongodb')

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/StartupsDB"

MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo = db.db("StartupsDB")
    dbo.createCollection('Blog',(err,res)=>{
        if(err)throw err;
        console.log('Collection or Table is created Successfully');
        db.close();
    })
})
