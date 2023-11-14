import nodemailer from 'nodemailer'

export const sendMailFn = async (user,pass,to, subject, content) => {
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user,
                pass
            }
        });
    
        var mailOptions = {
            from: user,
            to,
            subject,
            html: content
        };
    
        await transporter.sendMail(mailOptions);

        return true
    }catch(err) {
        return false
    }
}