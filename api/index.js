import express from "express";
import cors from "cors";
import pkg from "caesar-salad";

const { Vigenere } = pkg;

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Home page");
});

app.post("/encode", (req, res) => {
    const { password, message } = req.body;

    try {
        return res.json({ encoded: Vigenere.Cipher(password).crypt(message) });
    } catch (e) {
        console.error(e);
    }
});

app.post("/decode", (req, res) => {
    const { password, message } = req.body;

    try {
        return res.json({ decoded: Vigenere.Decipher(password).crypt(message) });
    } catch (e) {
        console.error(e);
    }
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
