var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/StartupsDB"

MongoClient.connect(url,(err,db)=>{
    if(err)throw err
    console.log('DB Connected')
    var dbo = db.db('StartupsDB')

    var myobj = [
    {
        name:"Haseeb",
        lname:"Farahi"
        },
    {
        _id:123,
        name:"Sardar",
        lname:"Farahi",
        hobbies:['Football','Swimming','Gaming'],
        friends:[
            { name:'wadan',age:23, phone: 123243, },
            { name:'Haseeb',age:20, phone: 1245345, },
            { name:'Zohaib',age:29, phone: 87766, }
        ],
        mobile:{
            name:'Iphone',
            model: 'Iphone 4s',
            price:10000,
            storage:'64GB',
            RAM: '4GB'
        }
    },
]
    dbo.collection('Blog').insertMany(myobj,(err,res)=>{
        if(err)throw err
        console.log('Reccord inserted in Collection')
        db.close();
    })
})