import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import {sendMailFn} from './mail.js';

const server = express();

server.use(cors());
server.use(bodyParser.json())


server.post('/send-mail', async (req, res) => {
    try {
        await sendMailFn(req.body.user, req.body.pass, req.body.to, req.body.subject, req.body.content)
        return res.status(200).json({
            message: "Send mail successfully"
        })
    }catch(err) {
        return res.status(500).json({
            message: "Gui that bai"
        })
    }
})


server.listen(3000, () => {
    console.log("Ok Server!")
})