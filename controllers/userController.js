var db = require('../models');


function index(req, res) {
  db.user.find({}, function(err, allUsers){
    res.json(allUsers);
  })
}

function create(req, res) {
  // create new comment with form data (`req.body`)
    console.log('comment created');
    var newComment = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }

    user = new db.user(newUser);

    user.save(function handleDBUserSaved(err, savedUser) {
      res.json(savedUser);
    });
  };

module.exports = {
  index: index,
  create: create
};
