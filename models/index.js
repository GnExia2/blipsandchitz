// require mongoose and connect it to the localhost:db
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blipsandchitz');

module.exports.User = require("./user.js");
module.exports.Post = require("./post.js");
module.exports.Score = require("./score.js");
