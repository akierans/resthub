//Import Statements
let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

//Initialize the app
let app = express();

//Import Routes
let apiRoutes = require("./api-routes")

//Configure Body Parser to handle post requests
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

//Connect to Mongoose and set connection variable
//Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb://localhost/resthub', {
	useNewUrlParser: true,
	useUnifiedTopology: true});

var db = mongoose.connection

//Added check for db connection
if(!db)
	console.log("Error connecting to db")
else
	console.log("DB connected successfully")

//Setup server port
var port = process.env.PORT || 8080;

//Send message for default URL
app.get('/', (req, res) => res.send('Hello World, with Express, and now with added Nodemon!'));

//Use API routes in the App
app.use('/api', apiRoutes)

//Launch app to listen to specific port
app.listen(port, function() {
	console.log("Running RestHub on port " + port);
});