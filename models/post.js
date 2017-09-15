//require mongoose and setup Schema

let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Uawe = require('./user');


  let postSchema = new Schema({
     name: {type: Schema.Types.ObjectId, ref: 'User'},
     comment: String
  });

let posts = mongoose.model('posts', postSchema);

module.exports = posts;
