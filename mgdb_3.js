var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/StartupsDB"

MongoClient.connect(url, (err,db)=>{
    if(err)throw err;
    var dbo = db.db('StartupsDB')
    var myobj = {
        title:"This  is the First Title",
        body: "This is the First Boudy text",
        author: "Haseeb farahi"
    }
    dbo.collection("Blog").insertOne(myobj,(err,res)=>{
        if(err)throw err;
        console.log('The very First Document or Reccord is Created! ')
        db.close();
    })
})