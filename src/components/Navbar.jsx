import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {useNavigate } from "react-router-dom";
import useAuthCalls from "../hooks/useAuthCalls";
import { useSelector } from "react-redux";
import logo from "../assest/logo.png";
import { CardMedia } from "@mui/material";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { currentUser } = useSelector((state) => state.auth);
  const { logout } = useAuthCalls();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    navigate("/about");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };


  const handleMyBlogClick = () => {
    navigate("/my-blogs");
  };

  const handleLogoutClick = () => {
    logout();
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const navbarStyle = {
    backgroundColor: "#b388ff",
    height: 100,
    marginBottom:5,

  };

  const typographyStyle = {
    mr: 1,
    display: { xs: "none", md: "flex" },
    fontFamily: "'Fira Mono', monospace",
    fontWeight: 600,
    fontSize: 25,
    letterSpacing: ".2rem",
    color: "inherit",
    textDecoration: "none",
    mb: 5,
    "&:hover": 
    {
      color: "purple",}
    
  };
//   <style>
// @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@700&family=PT+Serif&display=swap');
// </style>

  return (
    <div>
      <AppBar position="static" sx={navbarStyle}>
        <Container  maxWidth="xl">
          <Toolbar disableGutters sx={{ marginTop:3}}>
            <CardMedia
              image={logo}
              style={{
                width: 70,
                height: 70,
                borderRadius: 80,
                marginTop: -45,           
              }}
              sx={{
    '@media (max-width: 900px)': {
      display: 'none',  // Ekran küçültüldüğünde gizle
    },
  }}
              
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={typographyStyle}
            ></Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={()=>navigate("/")}>
                  <Typography
                    textAlign="center"
                    // onClick={}
                  >
                    DASHBOARD
                  </Typography>
                </MenuItem>

                <MenuItem onClick={ currentUser ? () => navigate("/new-blog") : ()=>navigate("/login")}>
                  <Typography textAlign="center">NEWBLOG</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">ABOUT</Typography>
                </MenuItem>
              </Menu>
            </Box>
            
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BLOGGER
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button onClick={()=>navigate("/")} sx={typographyStyle}
   >
                DASHBOARD
              </Button>

              <Button
                onClick={ currentUser ? () => navigate("/new-blog") : ()=>navigate("/login")}
                sx={typographyStyle}
              >
                NEWBLOG
              </Button>
              <Button onClick={() => navigate("/about")} sx={typographyStyle}>
                ABOUT
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">

                <IconButton sx={{marginTop:-4}} onClick={handleOpenUserMenu} >
                  <Avatar
                    alt=""
                    src={
                      currentUser
                        ? currentUser.image
                        : "/static/images/avatar/2.jpg"
                    }
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: "white",
                      color: "orange",
                      
                    }}
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
                {currentUser ? (
                  <>
                    <MenuItem>
                      <Typography
                        textAlign="center"
                        onClick={handleMyBlogClick}
                      >
                        My Blogs
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <Typography
                        textAlign="center"
                        onClick={handleProfileClick}
                      >
                        Profile
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <Typography
                        textAlign="center"
                        onClick={handleLogoutClick}
                      >
                        Logout
                      </Typography>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={handleLoginClick}>
                        Login
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <Typography
                        textAlign="center"
                        onClick={handleRegisterClick}
                      >
                        Register
                      </Typography>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
