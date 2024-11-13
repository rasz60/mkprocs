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
  HomeRounded,
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
          <nav>
            <List>
              <ListItemButton component={Link} to="/" className="list-items">
                <ListItemIcon>
                  <HomeRounded />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
              <Divider />
              <ListItemButton
                component={Link}
                to="/processes/form"
                className="list-items"
              >
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
                  <ListItemButton
                    component={Link}
                    to="/admin/modules/form"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <Terminal />
                    </ListItemIcon>
                    <ListItemText primary="Module" />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton
                    component={Link}
                    to="/admin/orders/list"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <AddShoppingCartRounded />
                    </ListItemIcon>
                    <ListItemText primary="Order" />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton
                    component={Link}
                    to="/admin/product/list"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <SellRounded />
                    </ListItemIcon>
                    <ListItemText primary="Product" />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton
                    component={Link}
                    to="/admin/factory/list"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <WarehouseRounded />
                    </ListItemIcon>
                    <ListItemText primary="Factory" />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton
                    component={Link}
                    to="/admin/platform/list"
                    sx={{ pl: 4 }}
                  >
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
