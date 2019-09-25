var nodemailer = require('nodemailer');
require('dotenv').config()
//turn on in link https://myaccount.google.com/lesssecureapps
const option = {
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
};
var transporter = nodemailer.createTransport(option);

transporter.verify(function(error, success) {
    // Nếu có lỗi.
    if (error) {
        console.log(error);
    } else { //Nếu thành công.
        console.log('Kết nối thành công!');
        var mail = {
            from: process.env.MAIL_USER,
            to: 'huynhmai305@gmail.com',
            subject: 'Thư được gửi bằng Node.js', // Tiêu đề mail
            text: 'Thanh cong, chuc mung !!', // Nội dung mail dạng text
             // HTML body
            html:
            '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
            '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

            // Ds tệp đính kèm
            attachments: [
                // String attachment
                {
                    filename: 'notes.txt',
                    content: 'Some notes about this e-mail',
                    contentType: 'text/plain' // optional, would be detected from the filename
                }
            ]
        };
        //Tiến hành gửi email
        transporter.sendMail(mail, function(error, info) {
            if (error) { // nếu có lỗi
                console.log(error);
            } else { //nếu thành công
                console.log('Email sent: ' + info.response);
            }
        });
    }
});