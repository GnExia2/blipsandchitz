//require mongoose and setup Schema

let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  User = require('./user');

  let scoreSchema = new Schema({
    name: {type: Schema.Types.ObjectId, ref: 'User'},
   flappybirdscore: Number,
   Bunnydefensescore: Number
  });
// create Schema

let scores = mongoose.model('scores', scoreSchema);

module.exports = scores;
