import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Stack, TextField, Button } from '@mui/material';
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';

function Login() {
  const [login, { error }] = useMutation(LOGIN);
  const [formState, setformState] = useState({
    loginEmail: '',
    loginPassword: '',
    signupUsername: '',
    signupEmail: '',
    signupPassword: '',
    signupPasswordConfirm: '',
  });

  async function handleChange(event) {
    const { name, value } = event.target;
    setformState({
      ...formState,
      [name]: value,
    });
  }
  async function handleLogin(event) {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  }
  function handleSignup(event) {
    event.preventDefault();
  }
  return (
    <>
      <h2>Come on in!</h2>
      <h4>Login</h4>
      <form id="login-form" onSubmit={handleLogin}>
        <Stack margin={2} spacing={2}>
          <TextField
            name="loginEmail"
            label="Email address"
            type="email"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          ></TextField>
          <TextField
            name="loginPassword"
            label="Password"
            type="password"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          ></TextField>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </form>
      <h4>Sign up</h4>
      <form id="signup-form" onSubmit={handleSignup}>
        <Stack margin={2} spacing={2}>
          <TextField
            name="signupUsername"
            label="Username"
            size="small"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          ></TextField>
          <TextField
            name="signupEmail"
            label="Email address"
            size="small"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          ></TextField>
          <TextField
            name="signupPassword"
            label="Password"
            size="small"
            type="password"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          ></TextField>
          <TextField
            name="signupPasswordConfirm"
            label="Confirm password"
            size="small"
            type="password"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          ></TextField>
          <Button variant="contained" type="submit">
            Sign up
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default Login;
