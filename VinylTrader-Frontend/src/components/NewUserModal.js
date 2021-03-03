import React, {Component} from 'react';
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

export default class NewUserModal extends Component {

render (){
    return (
        // <form onSubmit ={(e) => this.submitForm(e)} >
      <div className={useStyles.root}>
         <p>Create A New User</p>
        <div>
        <TextField
            label="Username"
            id="outlined-margin-normal"
            className={useStyles.textField}
            margin="normal"
            variant="outlined"
            onChange = {(e) => this.setState({username: e.target.value})}
          />
          <TextField
            label="Password"
            id="outlined-margin-normal"
            className={useStyles.textField}
            margin="normal"
            variant="outlined"
            onChange = {(e) => this.setState({password: e.target.value})}
          />
           
          <Button variant="contained" color="primary" type="submit">
          Create
        </Button>
        </div>
        
      </div>
    //   </form>
    );
  }
}
  