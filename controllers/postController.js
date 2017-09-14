var db = require('../models');


function index(req, res) {
  db.post.find({}, function(err, allPosts){
    res.json(allPosts);
  })
}

module.exports = {
  index: index,
};
