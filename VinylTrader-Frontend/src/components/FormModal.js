import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 345,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));


export default function FormModal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <p>New Vinyl</p>
      <div>
      <TextField
          label="Album Cover URL"
          id="outlined-margin-normal"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Title"
          id="outlined-margin-normal"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
         <TextField
          label="Artist"
          id="outlined-margin-normal"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Genre"
          id="outlined-margin-normal"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
         <TextField
          label="Year"
          id="outlined-margin-normal"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="button">
        Submit Vinyl
      </Button>
      </div>
      
    </div>
  );
}

