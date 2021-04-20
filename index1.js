
const WebSocket = require('ws');
const http=require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require("./routes1");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.use('/js',express.static('./public/js'));
const port=4001;
app.listen(port,function(){
  console.log("Listening on Port "+port);
})
