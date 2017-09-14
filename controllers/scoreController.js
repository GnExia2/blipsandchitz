var db = require('../models');


function index(req, res) {
  db.score.find({}, function(err, allScores){
    res.json(allScores);
  })
}

module.exports = {
  index: index,
};
