const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id='x5b1a60ffaa1c6a5c05b1e53b';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

var userId = '5b0eb814047243c0353e4a1e';
if (!ObjectID.isValid(userId)) {
  console.log('User ID not valid');
}

User.find({
  _id: userId
}).then((users) => {
  console.log('Users', users);
});

User.findOne({
  _id: userId
}).then((user) => {
  console.log('User', user);
});

User.findById(userId).then((user) => {
  if (!user){
    return console.log('User ID not found');
  }
  console.log('User By ID', user);
}).catch((e) => console.log(e));
