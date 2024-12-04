import Navbar from './components/Navbar/Navbar.tsx';
import { Button, Container, CssBaseline, FormControl, Input, InputLabel, OutlinedInput } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const App = () => {


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
            <OutlinedInput id="encode_input"/>
          </FormControl>

          <FormControl sx={{width: "300px"}}>
            <InputLabel htmlFor="password_input">Password</InputLabel>
            <Input id="password_input"/>
          </FormControl>

          <FormControl sx={{width: "300px"}}>
            <InputLabel htmlFor="decode_input">Decode word</InputLabel>
            <OutlinedInput id="decode_input"/>
          </FormControl>
        </Container>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Button type={"button"}>
            <ArrowBackIcon />
          </Button>
          <Button type={"button"}>
            <ArrowForwardIcon />
          </Button>
        </div>
      </main>
    </>
  );
};

export default App;