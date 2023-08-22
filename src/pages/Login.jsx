import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import LoginForm, { loginScheme } from "../components/auth/LoginForm";
import useAuthCalls from "../hooks/useAuthCalls";
import { CardMedia } from "@mui/material";
import hello from "../assest/welcome.jpg";

const Login = () => {
  const { login } = useAuthCalls();

  return (

        <Container maxWidth="lg">
          <Grid
            container
            justifyContent="center"
            direction="row-reverse"
            sx={{
              height: "100vh",
              p: 2,
            }}
          >
            <Grid item xs={12} sm={10} md={6}>
              <Avatar
                sx={{
                  backgroundColor: "secondary.light",
                  m: "auto",
                  width: 40,
                  height: 40,
                }}
              >
                <LockIcon size="30" />
              </Avatar>
              <Typography
                variant="h4"
                align="center"
                mb={4}
                color="secondary.light"
              >
                Login
              </Typography>
    
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginScheme}
                onSubmit={(values, actions) => {
                  login(values);
                  actions.resetForm();
                }}
                component={(props) => <LoginForm {...props} />}
              ></Formik>
    
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography>
                  Do you not have an account? <Link to="/register">Sign Up</Link>{" "}
                </Typography>
              </Box>
            </Grid>
    
            <Grid item xs={12} sm={10} md={6}>
              <CardMedia
                sx={{ width: "100%", objectFit: "contain" }}
                component="img"
                image={hello}
              />
            </Grid>
          </Grid>
        </Container>
      );
    };

export default Login;
