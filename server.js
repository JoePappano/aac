var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session")

var app = express();

var PORT = process.env.PORT || 3001;

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./client/public/"));
app.set("view engine", "ejs");


//Routes aka Controller
require("./controller/apiRoutes")(app);

//Parsing csv file
// require("./csvConverter")


//Starting Server
app.listen(PORT, function() {
    console.log("========================")
    console.log(
        "Listening on port " + PORT + " Visit http://localhost:" + PORT + "/"
    )
    console.log("========================")
})
