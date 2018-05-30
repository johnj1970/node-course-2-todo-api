// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

   // db.collection('Users').deleteMany({name: 'Jon'}).then((result) => {
   //   console.log(result);
   // });

   db.collection('Users').deleteOne({
     _id: new ObjectID('5b0e834d860fca2858ca69f0')
   }).then((result) => {
     console.log(result);
   });

  //client.close();
});
