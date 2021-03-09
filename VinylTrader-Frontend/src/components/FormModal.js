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

// const classes = useStyles();


export default class FormModal extends Component {

    state = {
        image: "",
        title: "",
        artist: "",
        genre: "",
        year: ""
    }

    submitForm = async(e) => { 
        e.preventDefault()
        console.log("are you submitting stuff")

        const{ image, title, artist, genre, year } = this.state

        console.log( image, title, artist, genre, year)

        const newVinyl = {image, title, artist, genre, year, user_id: this.props.user.id}

        fetch('http://localhost:3000/vinyls', {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(newVinyl)
        }).then(res => res.json())
        .then(data => this.props.handleSubmit(data))
       

        // const reqObj = {
        //     method : "POST",
        //     headers : {"Content-Type" : "application/json"},
        //     body : JSON.stringify(newVinyl)
        // }
        // const response = await fetch('http://localhost:3000/vinyls', reqObj)
        // const data = await response.json()

        // this.props.handleSubmit(data);

        // e.target.reset()
    }

  
render (){
  return (
      <form onSubmit ={(e) => this.submitForm(e)} >
    <div className={useStyles.root}>
        <p>New Vinyl</p>
      <div>
      <TextField
          label="Album Cover URL"
          id="outlined-margin-normal"
          className={useStyles.textField}
          margin="normal"
          variant="outlined"
          onChange = {(e) => this.setState({image: e.target.value})}
        />
        <TextField
          label="Title"
          id="outlined-margin-normal"
          className={useStyles.textField}
          margin="normal"
          variant="outlined"
          onChange = {(e) => this.setState({title: e.target.value})}
        />
         <TextField
          label="Artist"
          id="outlined-margin-normal"
          className={useStyles.textField}
          margin="normal"
          variant="outlined"
          onChange = {(e) => this.setState({artist: e.target.value})}
        />
        <TextField
          label="Genre"
          id="outlined-margin-normal"
          className={useStyles.textField}
          margin="normal"
          variant="outlined"
          onChange = {(e) => this.setState({genre: e.target.value})}
        />
         <TextField
          label="Year"
          id="outlined-margin-normal"
          className={useStyles.textField}
          margin="normal"
          variant="outlined"
          onChange = {(e) => this.setState({year: e.target.value})}
        />
        <Button variant="contained" color="primary" type="submit">
        Submit Vinyl
      </Button>
      </div>
      
    </div>
    </form>
  );
}
}

