var express = require('express');
var router = express.Router();

const sendMail = require('../utils/nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register',(req,res,next)=>{
  sendMail("kpreamlata132@gmail.com");
  try {
  res.render('register');
} catch (error) {
  console.log(error)
  res.send(error);
}
});


module.exports = router;
