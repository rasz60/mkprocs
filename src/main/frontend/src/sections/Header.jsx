/*
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

import { SiProcesswire } from "react-icons/si";
*/
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import { AlternateEmail } from "@mui/icons-material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar id="header">
          <Box component="div" sx={{ flexGrow: 1 }} id="logo">
            <IconButton size="xlarge" edge="start" color="inherit">
              <AlternateEmail id="spinner" size="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
