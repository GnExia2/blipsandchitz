var db = require("./models");

var userList =[];
  userList.push({
    name: 'Garrick',
    password: '13Slivers',
    email: 'garrickdark@yahoo.com'
  });
  userList.push({
    name: 'Calvin',
    password: '99Slivers',
    email: 'wcfreedom@gmail.com'
  });


  db.user.remove({}, function(err, user){
      // code in here runs after all users are removed
    db.user.create(userList, function(err, user){
      console.log('created user');
      // code in here runs after all users are created
      if (err) { return console.log('ERROR', err); }
        console.log("all users:", user);
    });
    console.log("created", user.length, "user");
  });
