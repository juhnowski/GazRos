// To get up and running with this example, download the Gist from
// https://gist.github.com/daffl/6665992/download
// Unpack and in the new folder run
// > npm install feathers
// > node server.js
// Then go to http://localhost:8080    -> 4000
 
var feathers = require('feathers');
var TodoService = require('./todos');
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "qqq@gmail.com",
        pass: "qqq"
    }
});

feathers().configure(feathers.socketio())
  .use(feathers.static(__dirname))
  .use('/todos', new TodoService())
  .listen(80);
