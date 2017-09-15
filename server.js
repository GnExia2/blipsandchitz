// requires express & body-parser to be used in our application
let express = require('express'),
  bodyParser = require('body-parser');

  // connect to models
  let db = require('./models');

// generate a new express app and call it 'app'
  let app = express();

// requiring controllers to connect to controller directory
  let controllers = require('./controllers');

  // server static files from public folder
  app.use(express.static('public'));

  // body-parser config to accept our data-types
  app.use(bodyParser.urlencoded({ extended:true }));

// routes

app.get('/', function (req, res) {
  res.sendFile('views/index.html', {root:__dirname});
    console.log(__dirname);
});

app.get('/flappybird', function (req, res) {
  res.sendFile('views/flappybird.html', {root:__dirname});
  console.log(__dirname);
});

app.get('/Bunnydefense', function (req, res) {
  res.sendFile('views/bunnydefenese.html', {root:__dirname});
  console.log(__dirname);
});

app.get('/userprofile', function (req, res) {
  res.sendFile('views/userprofile.html', {root:__dirname});
  console.log(__dirname);
});

app.get('/landingpage', function (req, res) {
  res.sendFile('views/landingpage.html', {root:__dirname});
  console.log(__dirname);
});


//api routes
app.get('/api', controllers.api.index);

app.get('/api/posts', controllers.post.index);

app.get('/api/scores', controllers.score.index);

app.get('/api/user', controllers.user.index);





//create on port 3000

app.listen(process.env.PORT || 3000, function (){
  console.log("Express Server is up and running on http://localhost:3000/");
});
