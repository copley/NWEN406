var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var jwt = require("jsonwebtoken");
var User = mongoose.model('User',{
    email: String,
    password : String 
});

//middleware 
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})


// routing block
var api = express.Router();

app.get('/mongoose',  (req,res)=>{
    User.find({}).exec(function(err, result){
       res.json(result);
    })
    
}) ; 


app.get('/register', (req,res)=>{
    var user = new User({email: "e" , password: "ps"}); //req.body);
    user.save(function (err, updatedTank) {
        if (err) console.log("we are not saving to mongoose api");
        console.log("updatedTank",updatedTank);
        User.findOne({email:req.body.email.toString()}).exec(function(err, result){
            console.log ("result",result) ; 
            sendToken (result ,res);
        })
    });
})

app.post('/login', (req,res)=>{
    console.log(req.body) ;
        User.findOne({email:req.body.email.toString()}).exec(function(err, result){
            if (result==null) return res.json({message:"user name is not registered"});
            console.log(result.password) ;  console.log(req.body.password)  ;
            if (result.password==req.body.password)
            sendToken (result ,res);
            else 
            res.json({message:"password does not match"});
        })
   
})

api.use('/api',api) ;


function sendToken (result, res){
var token = jwt.sign(parseInt(result._id), "configsecrete");
            var returnObj = {token:token, user:result.email};
             console.log("returnObj",returnObj);
            res.json(returnObj);    
}


mongoose.connect("mongodb://mongodb/dev", function(err,db){
    if(!err){
        console.log("we are connected to mongoose aps");
     
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
        console.log("we are connected to mongos");
        database = db;
    }
})

var server = app.listen(3000, function(){
    console.log('listening on port ', server.address().port)
})
