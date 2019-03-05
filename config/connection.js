var mongoose = require("mongoose");

//Local Database Configuration with Mongoose
 mongoose.connect("mongodb://localhost/goodnews", function(error)
	{if(error) throw error;
	console.log("Database connected");
});

 /*//mLab database
mongoose.connect("mongodb://.............................", function(err) {
	if(err) throw err;
	console.log('database connected');
}); 

*/ 

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Mongoose!')
});