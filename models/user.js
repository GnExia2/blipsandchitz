//require mongoose and setup Schema

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var userSchema = new Schema({
     name: String,
     password: String,
     email: String
  });
// create Schema

var users = mongoose.model('users', userSchema);

module.exports = users;
