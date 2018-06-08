var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
//mongodb://<dbuser>:<dbpassword>@ds147420.mlab.com:47420/johnj1970_todos
module.exports = {mongoose};
