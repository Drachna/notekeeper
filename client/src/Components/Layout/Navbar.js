
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const [showLoginForm, setShowLoginForm] = useState(true)
  const handleClick = async() => {
await setShowLoginForm(!showLoginForm)
// console.log(showLoginForm);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Keeps
          </Typography>
          <Button>

        

            <Button style={{ color: "white" }} onClick={handleClick}>
             
              {showLoginForm?'Register':'Login'}
            </Button>
          </Button>
        </Toolbar>
      </AppBar>
      {showLoginForm ? <Login/> : <Register />}
      
    </div>
  );
}