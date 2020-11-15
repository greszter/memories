import React from 'react';
import { Typography, Paper, Container, Link } from '@material-ui/core';


import useStyles from './styles';

const MainPage = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Container>
        <Typography variant="h6" align="center">Welcome to Memories!</Typography>
        <Typography variant="h6" align="center">
          <Link href="/login" className={classes.url} underline="none">
            Login
          </Link>
        </Typography>
        <Typography  variant="h6" align="center" >
          <Link href="/register" className={classes.url} underline="none">
            Register
          </Link>
        </Typography>
      </Container>
    </Paper>
  );
};

export default MainPage;