/*
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

import { SiProcesswire } from "react-icons/si";
*/
import { useState } from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  Button,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  IconButton,
  Backdrop,
  Divider,
} from "@mui/material";
import {
  AlternateEmail,
  Add,
  ExpandLess,
  ExpandMore,
  MemoryRounded,
  SettingsSuggestRounded,
  SellRounded,
  WarehouseRounded,
  AddShoppingCartRounded,
  Storefront,
  Terminal,
  Close,
} from "@mui/icons-material";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleMenu = (event) => {
    event.stopPropagation();
    setMenu(!menu);
  };

  const handleAdmin = (event) => {
    event.stopPropagation();
    setAdmin(!admin);
  };

  return (
    <AppBar id="header-wrapper" position="static" color="secondary">
      <Toolbar id="header">
        <Box component="div" sx={{ flexGrow: 1 }} id="logo">
          <Link to="/">
            <AlternateEmail
              id="spinner"
              sx={{ mr: 2, fontSize: 50 }}
              link="/"
            />
          </Link>

          <Button
            variant="outlined"
            size="small"
            className="btn-menu"
            onClick={handleMenu}
            endIcon={<Add />}
          >
            Menu
          </Button>
        </Box>
      </Toolbar>
      <Backdrop open={menu} sx={{ zIndex: 2 }} onClick={handleMenu}>
        <Box id="side-menu" className={menu ? "show" : "hide"}>
          <Box id="side-menu-header">
            <IconButton onClick={handleMenu}>
              <Close />
            </IconButton>
          </Box>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItemButton className="list-items" to="/processes/form">
                <ListItemIcon>
                  <MemoryRounded />
                </ListItemIcon>
                <ListItemText primary="Process" />
              </ListItemButton>
              <Divider />
              <ListItemButton className="list-items" onClick={handleAdmin}>
                <ListItemIcon>
                  <SettingsSuggestRounded />
                </ListItemIcon>
                <ListItemText primary="Admin" />
                {admin ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider />
              <Collapse in={admin} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} to="/admin/modules/form">
                    <ListItemIcon>
                      <Terminal />
                    </ListItemIcon>
                    <ListItemText primary="Module" />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton sx={{ pl: 4 }} to="/admin/orders/form">
                    <ListItemIcon>
                      <AddShoppingCartRounded />
                    </ListItemIcon>
                    <ListItemText primary="Order" />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton sx={{ pl: 4 }} to="/admin/product/list">
                    <ListItemIcon>
                      <SellRounded />
                    </ListItemIcon>
                    <ListItemText primary="Product" />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton sx={{ pl: 4 }} to="/admin/factory/list">
                    <ListItemIcon>
                      <WarehouseRounded />
                    </ListItemIcon>
                    <ListItemText primary="Factory" />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton sx={{ pl: 4 }} to="/admin/platform/list">
                    <ListItemIcon>
                      <Storefront />
                    </ListItemIcon>
                    <ListItemText primary="Platform" />
                  </ListItemButton>
                  <Divider />
                </List>
              </Collapse>
            </List>
          </nav>
        </Box>
      </Backdrop>
    </AppBar>
  );
};

export default Header;
