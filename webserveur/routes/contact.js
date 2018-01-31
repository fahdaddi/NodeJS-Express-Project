var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
    title: 'contact'
 });
});

router.post('/send',function(req,res,next){
  var transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
      user: 'gyroscope.contact@gmail.com',
      pass:'azerty123456789'
    }
  });

  var mailOptions = {
    from:'"Geroscope" <contact@gyroscope.com>',
    to:'gyroscope.contact@gmail.com',
    subject:'Vous avez un nouveau message de la part de: '+req.body.name,
    text:'you\'ve got a new submission from: '+req.body.name+' Email: '+req.body.email+'\nThe message is: '+req.body.message,
    html:'<p>you\'ve got a new submission from:</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>The message is: '+req.body.message+'</li></ul>'
  }
  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      return console.log(error);
    }
    console.log('Message Sent: '+info.response);
    res.redirect('/');
  });
});



module.exports = router;
