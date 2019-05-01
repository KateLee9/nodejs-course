//CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017' //localhost IP
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID('5cc996e9e816996860da1049') }, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({ age:23 }).toArray((error, documents) =>{
    //     if(error){
    //         return console.log('Unable to fetch users');
            
    //     }
    //     console.log(documents);
    // })

    db.collection('tasks').findOne({ _id: new ObjectID('5cc977a55001715650973f93')}, (error, task) =>{
        
        if(error){
            return console.log('Unable to fetch');
            
        }
        console.log(task);
    })

    db.collection('tasks').find({completed : true}).toArray( (error, documents) =>{
        console.log(documents);
        
    })
})