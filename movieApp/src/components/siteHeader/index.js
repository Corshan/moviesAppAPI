import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { AccountCircleRounded } from "@mui/icons-material";
import { logout } from "../../auth/authUser";
import { auth } from '../../firebase-config';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);

  const open = Boolean(anchorEl);

  const openUser = Boolean(anchorE2);

  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Top rated", path: "/movies/toprated"},
    { label: "Tv Shows", path: "/tvshows/discover" },
    { label: "Actors", path: "/actors/popular"},
    { label: "Favourite Movies", path: "/movies/favourites" },
    {label: "Favourite Tv Shows", path: "/tvshow/favourites"},
    { label: "Watch Later Movies", path: "/movies/watchLater" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
    setAnchorEl(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenu = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleSignOut = (event) => {
    logout();
    navigate("/login", { replace: true })
    setAnchorE2(null)
  }

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          <>
            {
              auth.currentUser ? (
                <>
            <IconButton
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleUserMenu}
            color="inherit"
            >
            <AccountCircleRounded></AccountCircleRounded>
            </IconButton>
            <Menu
                  id="menu-appbar"
                  anchorEl={anchorE2}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={openUser}
                  onClose={() => setAnchorE2(null)}
                >
                  
                    <MenuItem onClick={handleSignOut}>
                      Sign Out
                    </MenuItem>
                  </Menu>
                  </>) : null
                }
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;