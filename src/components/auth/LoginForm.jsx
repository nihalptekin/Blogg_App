import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { object, string } from "yup";

export const loginScheme = object({
  email: string()
    .email("Bitte geben Sie eine gültige Email-Adresse ein")
    .required("E-Mail ist erforderlich"),
  password: string().required("Password ist erforderlich"),
});

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <Form >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
        />
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />
        <Button variant="contained" type="submit" sx={{background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
          LOGIN
        </Button>
      </Box>
    </Form>
  );
};

export default LoginForm;
