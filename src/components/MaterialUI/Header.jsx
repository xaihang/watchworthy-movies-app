import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    fontFamily: 'sans-serif',
    fontSize: '2rem',
    textShadow: '2px 2px 4px #000000',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <img src="/logo.png" alt="Watchworthy logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Watchworthy
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
