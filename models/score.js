//require mongoose and setup Schema

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var scoreSchema = new Schema({
    //  name: User.name.id,
     flappybirdscore: Number,
     bunnydefensescore: Number
  });
// create Schema

var scores = mongoose.model('scores', scoreSchema);

module.exports = scores;
