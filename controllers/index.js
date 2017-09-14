// require mongoose and connect it to the localhost:db
// let mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/blipsandchitz', {useMongoClient: true});


module.exports = {
  api: require('./apiController'),
  post: require('./postController'),
  user: require('./userController'),
  score: require('./scoreController')
}
