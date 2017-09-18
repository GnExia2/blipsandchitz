var db = require('../models');


function index(req, res) {
  db.post.find({}, function(err, allPosts){
    res.json(allPosts);
  })
}

function create(req, res) {
  // create new comment with form data (`req.body`)
    console.log('comment created');
    var newComment = {
      name: req.body.name,
      comment: req.body.comment
    }

    comment = new db.delay(newComment);

    comment.save(function handleDBCommentSaved(err, savedComment) {
      res.json(savedComment);
    });
  };

module.exports = {
  index: index,
  create: create
};
