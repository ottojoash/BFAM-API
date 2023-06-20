import "./loginform.css";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Box, Button, Checkbox, FormControl, Grid, Alert } from "@mui/material";
import { IconButton, FormControlLabel, FormHelperText } from "@mui/material";
import { InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Card, CardContent, Stack, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/loginSlice";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useScriptRef from "../../hooks/useScriptRef";
import { Navigate } from "react-router-dom";

function ResetPassword({ ...others }) {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const [checked, setChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const dispatch = useDispatch();

  const handleReset = async () => {
    console.error("Login");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Card className="card" sx={{ borderRadius: 6 }}>
      {/* <Alert
        severity="warning"
        color="info"
        sx={{ backgroundColor: "red.300" }}
      >
        Error message
      </Alert> */}
      <CardContent className="login-form">
        {loggedIn && <Navigate to="/" replace={true} />}
        <Grid item xs={12}>
          <Grid
            container
            direction={matchDownSM ? "column-reverse" : "row"}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Stack alignItems="center" justifyContent="center" spacing={1}>
                <Typography
                  color={theme.palette.secondary.main}
                  gutterBottom
                  variant={matchDownSM ? "h5" : "h4"}
                >
                  Reset Password
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" justifyContent="center" spacing={2}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              password: Yup.string().max(255).required("Password is required"),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              dispatch(login(values));

              try {
                if (scriptedRef.current) {
                  setStatus({ success: true });
                  setSubmitting(false);
                }
              } catch (err) {
                console.error(err);
                if (scriptedRef.current) {
                  setStatus({ success: false });
                  setErrors({ submit: err.message });
                  setSubmitting(false);
                }
              }
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form noValidate {...others}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                  sx={{ ...theme.typography.customInput, marginTop: 5 }}
                >
                  <InputLabel htmlFor="outlined-adornment-email-login">
                    Email Address
                  </InputLabel>
                  <Field
                    as={OutlinedInput}
                    id="outlined-adornment-email-login"
                    type="email"
                    name="email"
                    label="Email Address / Username"
                  />
                  <ErrorMessage
                    name="email"
                    component={FormHelperText}
                    error
                    id="standard-weight-helper-text-email-login"
                  />
                </FormControl>
                {/* <FormControl
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  sx={{ ...theme.typography.customInput, marginTop: 2 }}
                >
                  <InputLabel htmlFor="outlined-adornment-password-login">
                    Password
                  </InputLabel>
                  <Field
                    as={OutlinedInput}
                    id="outlined-adornment-password-login"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    label="Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component={FormHelperText}
                    error
                    id="standard-weight-helper-text-password-login"
                  />
                </FormControl> */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ textDecoration: "none", cursor: "pointer" }}
                    component={Link}
                    to={"/login"}
                  >
                    I know my password
                  </Typography>
                </Box>
                {errors.submit && (
                  <Box sx={{ mt: 3 }}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
                <Box sx={{ mt: 2 }}>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Reset Password
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>

        <Divider />

        <Grid container direction="column" justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Typography
              component={Link}
              to="/signup"
              variant="subtitle1"
              sx={{ textDecoration: "none" }}
            >
              Don&apos;t have an account?
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ResetPassword;
