import Navbar from './components/Navbar/Navbar.tsx';
import { Button, Container, CssBaseline, FormControl, Input, InputLabel, OutlinedInput } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axiosApi from './axiosApi.ts';
import { useState } from 'react';

const App = () => {

  const [encodeInput, setEncodeInput] = useState("");
  const [encodedMessage, setEncodedMessage] = useState("");

  const [passwordInput, setPasswordInput] = useState("");


  const password = "hello";

  const getEncodedMessage = async () => {
    try {
      if (encodeInput && passwordInput === "hello") {
        const response = await axiosApi.post("/encode", {password: password, message: encodeInput});
        setEncodeInput("");
        setEncodedMessage(response.data.encoded);
        console.log(response.data.encoded);
        setPasswordInput("");
      } else {
        alert("Word for encode not field or incorrect password!");
      }


    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <CssBaseline />
      <header>
        <Navbar />
      </header>
      <main>
        <Container component="main" sx={{flexGrow: 1, display: "flex", gap: "40px", justifyContent: "space-between", mb: "40px"}}>
          <FormControl sx={{width: "300px"}}>
            <InputLabel htmlFor="my-encode_input">Encode word</InputLabel>
            <OutlinedInput
              id="encode_input"
              value={encodeInput}
              onChange={(e) => setEncodeInput(e.target.value)}
            />
          </FormControl>

          <FormControl sx={{width: "300px"}}>
            <InputLabel htmlFor="password_input">Password</InputLabel>
            <Input
              id="password_input"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </FormControl>

          <FormControl sx={{width: "300px"}}>
            <InputLabel htmlFor="decode_input">Decode word</InputLabel>
            <OutlinedInput
              id="decode_input"
              value={encodedMessage}
            />
          </FormControl>
        </Container>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Button
            type={"button"}
          >
            <ArrowBackIcon />
          </Button>
          <Button
            type={"button"}
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