var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
     user : 'nodesourabh@gmail.com',
    pass : 'node_sourabh123!'
   
   
  }
});


var mailOptions = {
    from: 'nodesourabh@gmail.com',
    to: 'shatakshilonkar@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
  }

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});