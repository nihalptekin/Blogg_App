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
import { useNavigate } from "react-router-dom";
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
    marginBottom: 5,
  };

  const typographyStyle = {
    mr: 1,
    display: { xs: "none", md: "flex" },
    fontFamily: "'Righteous', cursive",
    fontSize: 30,
    letterSpacing: ".2rem",
    color: "inherit",
    textDecoration: "none",
    textTransform: "capitalize",
    mb: 5,
    "&:hover": {
      color: "purple",
    },
  };

  return (
    <div>
      <AppBar position="static" sx={navbarStyle}>
        <Container maxWidth="xl" >
          <Toolbar disableGutters sx={{ marginTop: 2 }}>
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
                <MenuItem onClick={() => navigate("/")}>
                  <Typography textAlign="center">DASHBOARD</Typography>
                </MenuItem>

                <MenuItem
                  onClick={
                    currentUser
                      ? () => navigate("/new-blog")
                      : () => navigate("/login")
                  }
                >
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
                fontFamily: "'Righteous', cursive",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BLOGGER
            </Typography>


          
              <Box sx={{ flexGrow: 1,  display: { xs: "none", md: "flex" } }} >
                <CardMedia
                  image={logo}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 80,
                  }}
                  sx={{
                    "@media (max-width: 900px)": {
                      display: "none", // Ekran küçültüldüğünde gizle
                    },
                  }}
                />
                <Button onClick={() => navigate("/")} sx={typographyStyle}>
                  Dashboard
                </Button>

                <Button
                  onClick={
                    currentUser
                      ? () => navigate("/new-blog")
                      : () => navigate("/login")
                  }
                  sx={typographyStyle}
                >
                  NewBlog
                </Button>
                <Button onClick={() => navigate("/about")} sx={typographyStyle}>
                  About
                </Button>
              </Box>
    
         
            <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
                        marginTop:-4
                      }}
                    />
                  </IconButton>
                </Tooltip>
              <Menu
                sx={{ mt: "70px" }}
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
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={handleLoginClick}>
                        Login
                      </Typography>
                    </MenuItem>
                  </>
                ) : (
                  <>
                 

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
