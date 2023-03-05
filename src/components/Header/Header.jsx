import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logo from "../Header/logo.png";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    fontFamily: 'Shantell Sans',
    fontSize: "3.5rem",
  },
  logo: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <img
            src={logo}
            alt="Watchworthy logo"
            className={classes.logo}
            onClick={() => (window.location.href = "/")}
          />
          <Typography variant="h6" className={classes.title}>
            Watchworthy
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
