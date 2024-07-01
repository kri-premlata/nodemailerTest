const nodemailer = require('nodemailer');

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kkpremlata2607@gmail.com',
    pass: 'dwgumspfzitvjsuz'
  },
  port: 587 // port for STARTTLS
});

// Email content
const mailOptions = {
  
};

// Sending email
function mailSend(to){
    transporter.sendMail({

        from: 'kkpremlata2607@gmail.com',
        to: to,
        subject: 'Suscribe Test Email',
        text: 'Welcome email to the suscriber.'}
        
        , function(error, info){
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


module.exports = mailSend;