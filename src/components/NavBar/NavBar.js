import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spread: {
    justifyContent: "space-between",
  },
  title: {
    flexGrow: 1,
  },
  white: {
    color: "white",
    textDecoration: "none",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  // console.log(classes);
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.white} to="/">
            Feedback
          </Link>
        </Typography>
        <Button color="inherit" variant="outlined">
          <Link className={classes.white} to="/admin">
            Admin
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
