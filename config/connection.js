var mongoose = require("mongoose");

//Local Database Configuration with Mongoose
 mongoose.connect("mongodb://localhost/news", function(error)
	{if(error) throw error;
	console.log("Database connected");
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Mongoose!')
});