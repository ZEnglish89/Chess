var bodyParser = require('body-parser');
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');
var app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.get("/",function(req,res){
	    res.sendFile(__dirname + "/Public/views/Select.html");
});
router.get("/play",function(req,res){
	res.sendFile(__dirname + "/Public/views/Chess.html");
})
router.get("/request",function(req,res){
	res.json(imageName);
})
//router.get("/move",function(req,res)){

//}

router.post('/selections', function(req, res){
	res.sendFile(__dirname + "/Public/views/Selections.html");
});

module.exports = router;
