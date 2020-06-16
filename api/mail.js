
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




app.post('/', function (req, res) {
    const { subject, message, fullName, email } = req.body.data;
    var emailTemplate = {
        to: ['jozaguts@gmail.com'], //aqui en correo de admin de la página "christian" donde van a llegar los correos 
        from: 'jozaguts@hotmail.com', // aqui el correo registrado y autorizado de sendgrid "contacto@proesolar.com.mx"
        subject: subject, //asunto 
        text: message, //mensaje
        html: `<b>Mensaje envido desde ProeSolar.com.mx </b> <br>
                <b>Asunto:</b> <p>${subject}</p> </br>
                <b>Nombre:</b> <p>${fullName}</p> </br>
                <b>Correo:</b> <p>${email}</p> </br>
                <b>Mensaje:</b> <p> ${message}</p> </br>`
    };

    // mailer.sendMail(emailTemplate, function (err, res) {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log(res);
    // });
    res.json({ success: 'Mensaje enviado con éxito' }).end()
    // res.end();

})

export default {
    path: '/enviar-correo',
    handler: app
}
