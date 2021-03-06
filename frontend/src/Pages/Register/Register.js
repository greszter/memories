import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import useStyles from './styles';
import { createUser } from '../../actions/register';

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  function redirect() {
      history.push('/login');
  }

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (username && password) {
      setUsername(username);
      setPassword(password);
    };
  }, [username, password]);

  const clear = () => {
    setUsername('');
    setPassword('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username && password) {
      dispatch(createUser({ username: username, password: password }));
    redirect();
    };
    clear();
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Register</Typography>
        <TextField 
          name="username"
          variant="outlined"
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value )}
        />
        <TextField 
          name="password"
          variant="outlined"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >
          Register
        </Button>
      </form>
    </Paper>
  );
};

export default Register;