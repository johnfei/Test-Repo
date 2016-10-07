var express = require('express');
var bodyParser 	= require('body-parser');
//var Pusher = require('pusher');
var app = express();
var items = ['apple','banana','pear'];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})


// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

app.get('/api/items', function (req, res) {
   console.log("for items");
   res.send(items);
})


/*var pusher = new Pusher({
  appId: '231062',
  key: '8df5d579b734841c2a40',
  secret: '2998c88f423e2aa3da05',
  cluster: 'ap1'
});*/

app.post('/api/items', function (req, res) {

  // get our item from the req and update the item collection
  // in a production application this would have validation and items
  // would be stored in a database.
  var item = req.body.name;
  //items[item.id] = item;
  console.log(req.body);

  // tell Pusher to trigger an 'updated' event on the 'items' channel
  // add pass the changed item to the event
  
  
//pusher.trigger('items', 'updated', item);



  // respond with the changed item
  res.json(item);
});


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

module.exports = server;