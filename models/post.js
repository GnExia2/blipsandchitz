//require mongoose and setup Schema

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var postSchema = new Schema({
    //  name: User.name.id,
     comment: String
  });
// create Schema

var posts = mongoose.model('posts', postSchema);

module.exports = posts;
