var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/StartupsDB"

MongoClient.connect(url,(err,db)=>{
    var dbo = db.db('StartupsDB')

    dbo.collection('Blog').find({},{projection:{_id: 0, title:1,name:1}}).toArray((err,result)=>{
        if(err)throw err;
        console.log(result)
        db.close
    })
})