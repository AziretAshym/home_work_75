const express = require('express');
const {Vigenere} = require('caesar-salad')

const app = express();
const port = 8000   ;

const password = 'hello';

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/encode/:password', (req, res) => {
    return res.send(Vigenere.Cipher(password).crypt(req.params.password));
});

app.get('/decode/:password', (req, res) => {
    return res.send(Vigenere.Decipher(password).crypt(req.params.password));
});


app.listen(port, () => {
    console.log(`server started on port: http://localhost:${port}`);
})

