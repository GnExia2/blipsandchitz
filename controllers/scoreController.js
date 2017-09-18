var db = require('../models');


function index(req, res) {
  db.score.find({}, function(err, allScores){
    res.json(allScores);
  })
}

function create(req, res){
  var newDelay = {
    name: req.body.name,
    flappybirdscore: req.body.flappybirdscore,
    Bunnydefensescore: req.body.Bunnydefensescore
  }

  score = new db.score(newScore);

  score.save(function handleDBscoreSaved(err, savedScore) {
    res.json(savedScore);
  });

}


module.exports = {
  index: index,
  create: create
};
