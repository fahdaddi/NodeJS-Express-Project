var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */

var results;
fs.readFile('json/users.json','utf8',(err,data)=>{
  if(err){
    throw err;
  } else{
    results=JSON.parse(data);
  }
});

router.get('/', function(req, res, next) {
  res.render('about', {
    title: 'about',
    about: results
  });
});

module.exports = router;
