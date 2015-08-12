var express = require('express');
var app = express();

app.use('/addressBook', express.static('../frontend'));

app.get('/', function (req, res) {
   res.send('Server is Running');

});

app.get('/address/:id', function (req, res) {
   var address = {
   	 id : req.params.id,
   	 name : 'Asela',
   	 email : 'asela38@gmail.com',
   	 telephone : '111222111'
   }
   res.type('application/json');
   res.send(address);
});

app.get('/address', function (req, res) {
   var addresses = [
	   	{
	   	 id : 1,
	   	 name : 'Asela',
	   	 email : 'asela38@gmail.com',
	   	 telephone : '111222111'
	   },
	   {
	   	 id : 2,
	   	 name : 'Asela',
	   	 email : 'asela38@gmail.com',
	   	 telephone : '111222111'
	   }
	];
   res.type('application/json');
   res.send(addresses);
});


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})