import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import UserIcon from '@material-ui/icons/AccountCircle';
import useStyles from './navbar-style';


const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Naruto Roleros v0
          </Typography>
          <Button color="inherit">Aventura</Button>
          <Button color="inherit">Duelos</Button>
          <Button color="inherit">Discusiones</Button>
          <Button color="inherit">Ocio</Button>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="account">
            <UserIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;