//require mongoose and setup Schema

let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  let postSchema = new Schema({
    //  name: User.name.id,
     comment: String
  });

let posts = mongoose.model('posts', postSchema);

module.exports = posts;
