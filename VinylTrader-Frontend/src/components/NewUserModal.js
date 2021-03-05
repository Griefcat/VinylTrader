import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom';




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



class NewUserModal extends Component {

constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
    }
}



handleOnNewUserChange = e => {
    const type = e.target.className.split(' ')[1];
    let val = e.target.value;
    this.setState({
        [type]: val,
    })
}

handleOnNewUserSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/newuser',{
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
       body: JSON.stringify({
           username: this.state.username, 
           password: this.state.password})
    }).then(resp => resp.json())
    .then(user => {
        if (user.logged_in){
            this.props.setLoggedIn()
        }
    })
    this.props.history.push('/vinyls');
}

render (){
    console.log(this.props)
    return (
        <form onSubmit ={(e) => this.handleOnNewUserSubmit(e)} >
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

export default withRouter(NewUserModal);
  