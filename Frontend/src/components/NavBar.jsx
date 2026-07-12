import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const normalLinkStyle = {};

  const navLinkStyle = ({ isActive }) => ({
    color: "white",
    textDecoration: "none",
    marginRight: "1rem",
    fontFamily: "Roboto, sans-serif",
    fontSize: "1rem",
    fontWeight: isActive ? 700 : 400,
  });

  const userLinkStyle = {
    textAlign: "center",
    minWidth: 100,
    fontSize: "large",
    textDecoration: "none",
    color: "black",
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#953d60" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ mr: 10 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Learn Korean
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <NavLink to="/" style={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/dictionary" style={navLinkStyle}>
              Dictionary
            </NavLink>
            <NavLink to="/grammar" style={navLinkStyle}>
              Grammar
            </NavLink>
            <NavLink to="/vocabulary" style={navLinkStyle}>
              Vocabulary
            </NavLink>
            <NavLink to="/practice" style={navLinkStyle}>
              Practice
            </NavLink>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleRoundedIcon
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <NavLink to="/signin" style={userLinkStyle}>
                  Login
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/signup" style={userLinkStyle}>
                  Register
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
