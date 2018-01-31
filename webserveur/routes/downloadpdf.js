var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('downloadpdf', { title: 'downloadpdf' });
});
router.get('/download',(req,res)=>{
  res.download(path.join(__dirname,"../public/pdf.pdf"));
});

module.exports = router;
