var express = require("express");
var serveStatic = require("serve-static");

app = express();
app.use(serveStatic(__dirname + "/../storybook-static"));

var port_number = process.env.PORT || 5000;
app.listen(port_number, () => console.log('Listening on Port' + port_number));