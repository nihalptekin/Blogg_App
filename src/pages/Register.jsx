import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import { Link, useNavigate } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";
import people from "../assest/people.jpg";

import useAuthCall from "../hooks/useAuthCalls";

const Register = () => {
  const { register } = useAuthCall();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="space-between"
        sx={{ height: "100vh", p: 2 }}
      >
        <Grid item xs={12} sm={6} md={5}>
          <CardMedia
            sx={{ width: "100%", objectFit: "contain", marginTop: 15 }}
            component="img"
            image={people}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={5}>
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
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              password2: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
            }}
            component={(props) => <RegisterForm {...props} />}
          />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography>
              Do you not have an account? <Link to="/login">Login</Link>{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
