var db = require('../models');


function index(req, res) {
  db.user.find({}, function(err, allUsers){
    res.json(allUsers);
  })
}

module.exports = {
  index: index,
};
