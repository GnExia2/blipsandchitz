//require mongoose and setup Schema

let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  let userSchema = new Schema({
     name: String,
     password: String,
     email: String
  });
// create Schema

let users = mongoose.model('users', userSchema);

module.exports = users;
