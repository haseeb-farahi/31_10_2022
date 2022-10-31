var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, (err,db)=>{
    if(err)throw err 
    console.log('DB Connected!')
    var dbo = db.db('StartupsDB');
    
    var myQuery = {title:-1}
    dbo.collection('Blog').find().sort(myQuery).limit(5).toArray((err,result)=>{
        if(err)throw err;
        console.log(result)
        db.close
    })
})