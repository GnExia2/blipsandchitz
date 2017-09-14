//require mongoose and setup Schema

let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  let scoreSchema = new Schema({
    //  name: User.name.id,
     flappybirdscore: Number,
     bunnydefensescore: Number
  });
// create Schema

let scores = mongoose.model('scores', scoreSchema);

module.exports = scores;
