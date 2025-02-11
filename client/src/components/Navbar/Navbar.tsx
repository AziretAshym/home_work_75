import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "90px"}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            Encode&Decode Message
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;