var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url,(err,db)=>{
    if(err)throw err
    var dbo =db.db('StartupsDB')
    console.log('DB Conneted!')
    var myOldDataObj = { name: "Haseeb"}
    var myNewDataObj = {$set:{name:"Rahman"}}
    
    dbo.collection('Blog').updateMany( myOldDataObj,myNewDataObj,(err,res)=>{
        if(err)throw err
        console.log('One document updated!')
        db.close();
    })
})