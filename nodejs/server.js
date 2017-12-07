'use strict';
const http = require('http');
const express = require('express');
var bodyParser = require('body-parser');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});




// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const ad = function  (j) {
      j.push ({ad : 1}) ; 
    return j ;    
    
}

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/g', function(req, res) {
    http.get('http://52.64.15.213:8000/api/todo/getter', (r) => {
         var str = '';

  //another chunk of data has been recieved, so append it to `str`
  r.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  r.on('end', function () {
      let j =  JSON.parse(str) ;
       console.log (j) ;
      res.json({a:1})// res.json(  ad(j) );   
  });
        
        
       //    console.log('statusCode:', r.statusCode);
   // console.log('headers:', r.data);
         
});
   
});

app.use('/api', router);



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);