const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

function sendMail(name, email, contact, message) {
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const subject = 'Mail Regarding Feedback';
    const from = process.env.EMAIL_USER;

    // Sending email to the sender
    const senderTemplate = handlebars.compile(fs.readFileSync(path.join(__dirname, 'templates/', 'feedback.hbs'), 'utf8'));
    const senderHtml = senderTemplate({ name: name, message: message });

    const senderMailOptions = {
        from,
        to: email,
        subject,
        html: senderHtml
    };

    transporter.sendMail(senderMailOptions, (error, info) => {
        if (error) {
            console.log('Error sending to sender:', error);
        } else {
            console.log('Mail sent to sender');
        }
    });

    // Sending email to the admin
    const adminTemplate = handlebars.compile(fs.readFileSync(path.join(__dirname, 'templates/', 'admin_feedback.hbs'), 'utf8'));
    const adminHtml = adminTemplate({ name: name, email: email, contact: contact, message: message });

    const adminMailOptions = {
        from: email,
        to: process.env.ADMIN_USER,
        subject: 'New Feedback Received',
        html: adminHtml
    };

    transporter.sendMail(adminMailOptions, (error, info) => {
        if (error) {
            console.log('Error sending to admin:', error);
        } else {
            console.log('Mail sent to admin');
        }
    });
}

app.post('/', (req, res) => {
    const { name, email, contact, message } = req.body;
    sendMail(name, email, contact, message);
    res.status(200).json({ status: "Email sent successfully!" }); // Add status message
});


app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
});
