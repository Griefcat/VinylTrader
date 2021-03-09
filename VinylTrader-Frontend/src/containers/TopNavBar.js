// import React from 'react'

// export default function TopNavBar() {
//     return (
//         <div>
            
//         </div>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

// import MenuIcon from '@material-ui/icons/Menu';


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



const headingFont = createMuiTheme({
  typography: {
    fontSize: 60,
    fontFamily: [
      'Bebas Neue',
    ].join(',')},

    palette: {
      primary: {
        main: '#C44900'
      }}
  })
  
export default function TopNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <ThemeProvider theme={headingFont}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
          </IconButton>
          <Button href="/" color="white" variant="h6" className={classes.title}>
              VinylTrader
            </Button>
          {/* <Typography variant="h6" className={classes.title} component = {Link} to="/">
          VinylTrader
          </Typography> */}
          
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
  );
}