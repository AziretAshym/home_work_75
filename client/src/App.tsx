import Navbar from './components/Navbar/Navbar.tsx';
import { Button, Container, CssBaseline, FormControl, Input, InputLabel, OutlinedInput } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axiosApi from './axiosApi.ts';
import { useState } from 'react';

const App = () => {
  const [encodeInput, setEncodeInput] = useState("");
  const [encodedMessage, setEncodedMessage] = useState("");

  const [decodeInput, setDecodeInput] = useState("");
  const [decodedMessage, setDecodedMessage] = useState("");

  const [passwordInput, setPasswordInput] = useState("");

  const getEncodedMessage = async () => {
    if (!encodeInput) {
      alert("Please enter a word to encode!");
      return;
    }

    if (passwordInput !== "hello") {
      alert("Please enter correct password!");
      return;
    }

    try {
      const response = await axiosApi.post("/encode", {
        password: passwordInput,
        message: encodeInput,
      });

      setEncodedMessage(response.data.encoded);
      setDecodeInput(response.data.encoded);

      setEncodeInput("");
      setPasswordInput("");
    } catch (e) {
      console.error(e);
      alert("Encoding failed. Please try again.");
    }
  };

  const getDecodedMessage = async () => {
    if (!decodeInput) {
      alert("Please enter a word to decode!");
      return;
    }

    if (passwordInput !== "hello") {
      alert("Please enter correct password!");
      return;
    }

    try {
      const response = await axiosApi.post("/decode", {
        password: passwordInput,
        message: decodeInput,
      });

      setDecodedMessage(response.data.decoded);
      setEncodeInput(response.data.decoded);

      setDecodeInput("");
      setPasswordInput("");
    } catch (e) {
      console.error(e);
      alert("Decoding failed. Please try again.");
    }
  };

  return (
    <>
      <CssBaseline />
      <header>
        <Navbar />
      </header>
      <main>
        <Container
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            gap: "40px",
            justifyContent: "space-between",
            mb: "40px",
          }}
        >
          <FormControl sx={{ width: "300px" }}>
            <InputLabel htmlFor="encode_input">Encode word</InputLabel>
            <OutlinedInput
              id="encode_input"
              value={encodeInput}
              onChange={(e) => setEncodeInput(e.target.value)}
            />
          </FormControl>

          <FormControl sx={{ width: "300px" }}>
            <InputLabel htmlFor="password_input">Password</InputLabel>
            <Input
              id="password_input"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </FormControl>

          <FormControl sx={{ width: "300px" }}>
            <InputLabel htmlFor="decode_input">Decode word</InputLabel>
            <OutlinedInput
              id="decode_input"
              value={decodeInput}
              onChange={(e) => setDecodeInput(e.target.value)}
            />
          </FormControl>
        </Container>

        {/* Кнопки */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Button
            type="button"
            onClick={getDecodedMessage}
            variant="contained"
          >
            <ArrowBackIcon />
          </Button>
          <Button
            type="button"
            onClick={getEncodedMessage}
            variant="contained"
          >
            <ArrowForwardIcon />
          </Button>
        </div>
      </main>
    </>
  );
};

export default App;
