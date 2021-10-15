import express from 'express';
import config from './libs/config.js';
import checkPassword from './libs/checkPassword.js';
import { hash, compareHashes } from './libs/crypto.js';

const app = express();
config(app);

const messages = [];
const pass = await hash(process.env.PASS);
console.log(pass);
// console.log(typeof await pass);

app.use(async (req, res) => {
    if (req.body.message) {
        // console.log(typeof req.body.password);
        const success = await checkPassword(''+req.body.password, ''+pass);
        // console.log(req.body.password);
        // console.log(success);
        
        if (!success) {
            return res.status(400).json({ error: "error" })
        }   
        
        const newMessage = req.body.message;
        messages.push(newMessage);
        res.status(201);
        res.json({ savedMessage: newMessage })
        console.log(messages);
        return messages;
    }

    res.status(400);
    res.json({ error: "no message" });
});
// checkReqBody(req, res, messages));

app.listen(3234, () => {
    console.log("Listening: http://localhost:3234");
})