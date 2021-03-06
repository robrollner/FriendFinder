const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const colors = require('colors');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log(`Listening on Port: ${PORT}`);
});