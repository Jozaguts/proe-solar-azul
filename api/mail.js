
import express from 'express'
const app = express()
app.use(express.json())
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
    auth: {
        api_key: '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'
    }
}

var mailer = nodemailer.createTransport(sgTransport(options));

var email = {
    to: ['jozaguts@gmail.com'],
    from: 'jozaguts@hotmail.com',
    subject: 'Hi there',
    text: 'Awesome sauce',
    html: '<b>Awesome sauce</b>'

};


app.post('/', function (req, res) {

    mailer.sendMail(email, function (err, res) {
        if (err) {
            console.log(err)
        }
        console.log(res);
    });
    res.end();

})

export default {
    path: '/enviar-correo',
    handler: app
}
