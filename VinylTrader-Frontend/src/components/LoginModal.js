import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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



class LoginModal extends Component {

  constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
    }
}

handleOnLoginChange = e => {
  const type = e.target.className.split(' ')[1];
  let val = e.target.value;
  this.setState({
      [type]: val,
  })
}

  handleLoginSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login',{
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
            this.props.setLoggedIn(user)
            console.log(user)
        }
    ) 
    this.props.history.push('/vinyls')
}

render (){
    return (
      <form onSubmit ={(e) => this.handleLoginSubmit(e)} >
      <div className={useStyles.root}>
         <p>Login</p>
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
          Login
        </Button>
        </div>
        
      </div>
    //   </form>
    );
  }
}

export default withRouter(LoginModal)
