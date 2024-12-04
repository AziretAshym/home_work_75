const express = require('express');
const {Vigenere} = require('caesar-salad')

const app = express();
const port = 8000   ;


app.get('/', (req, res) => {
    return res.send('Home page');
});

app.post('/encode/', (req, res) => {
    const {password, message} = req.body;
    return res.json(Vigenere.Cipher(password).crypt(message));
});

app.post('/decode/', (req, res) => {
    const {password, message} = req.body;
    return res.json(Vigenere.Decipher(password).crypt(message));
});


app.listen(port, () => {
    console.log(`server started on port: http://localhost:${port}`);
})

