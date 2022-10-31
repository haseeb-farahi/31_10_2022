var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/StartupsDB"

MongoClient.connect(url,(err,db)=>{
    var dbo = db.db('StartupsDB')

    dbo.collection('Blog').find({}).toArray((err,result)=>{
        if(err)throw err;
        console.log(result)
        db.close
    })
})