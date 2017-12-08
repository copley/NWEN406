var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var mongoose = require('mongoose');

var Message = mongoose.model('Message',{
    sqlStatement: String
});

//middleware 
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})


// routing 
var api = express.Router();

app.get('/mongoose',  (req,res)=>{
    Message.find({}).exec(function(err, result){
       res.json(result);
    })
    
}) ; 


app.post('/mongoose', (req,res)=>{
    console.log(req.body.sqlStatement);
    
    var message = new Message(req.body);
    message.save();
    
    Message.find({}).exec(function(err, result){
       console.log (result)
       res.json(result);
    })
   
})

api.use('/api',api) ;


mongoose.connect("mongodb://mongodb/dev", function(err,db){
    if(!err){
        console.log("we are connected to mongoose");
     
    }
})


var database;





app.post('/mongodbAPI/message', function(req,res){
    console.log(req.body);
    database.collection('messages').insertOne(req.body);

    res.status(200);
})

mongo.connect("mongodb://mongodb/dev", function(err,db){
    if(!err){
        console.log("we are connected to mongo");
        database = db;
    }
})

var server = app.listen(3000, function(){
    console.log('listening on port ', server.address().port)
})
