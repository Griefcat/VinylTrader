import React, {Component, useState} from 'react';
import './App.css';
import VinylContainer from './containers/VinylContainer'
import TopNavBar from './containers/TopNavBar'
import {Route} from 'react-router-dom'
import LandingPage from './containers/LandingPage'
import NewUserModal from './components/NewUserModal'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#183A37'
    },
    secondary: {
      main: '#D6EFFF'
    }
  },
})


const axios = require('axios').default
// const [loggedIn, setLoggedIn] = useState(false)

class App extends Component {

state = {
  vinyls: [],
  loggedIn: false,
  user: {}
}

setVinyls = (vinyls) => {
  this.setState({vinyls: vinyls})
}


handleSubmit = (vinyl) => {this.setState({vinyls: [vinyl, ...this.state.vinyls,]})}

deleteVinyl = (vinyl) => {
    let id = vinyl.id
    const currentVinyls = this.state.vinyls;

  this.setState({
    vinyls: currentVinyls.filter(vinyl => vinyl.id !== id),
  });
  
    axios.delete(`http://localhost:3001/vinyls/${id}`, this.state)
    .then(response => {
      if (response.status === 'error') {
        this.setState({
          vinyls: currentVinyls,
        });
      } else {
      }
    });

    return fetch(`http://localhost:3000/vinyls/${vinyl.id}`, {
      method: 'delete'
    })
    .then(response => response.json())

  }

  setLoggedIn = (user) => {
    this.setState({loggedIn: true})
    this.setState({user: user})
  }
  
render(){

const vinyls = this.state.vinyls


  return (
    <div className="App" style={{
      backgroundColor: '#EFD6AC',
      height: '100vh'
    }}>
      <ThemeProvider theme={theme}>
      <TopNavBar/>
      <Route exact path='/' render={() => <LandingPage test={'test'} setLoggedIn={this.setLoggedIn.bind(this)}/>}/>
      <Route exact path='/newuser' render={() => <NewUserModal test={'test'} setLoggedIn={this.setLoggedIn.bind(this)}/>}/>
      <Route exact path='/vinyls' render={() => <VinylContainer setVinyls={this.setVinyls} user={this.state.user} vinyls={vinyls} handleSubmit={this.handleSubmit} deleteVinyl={this.deleteVinyl}/>} setLoggedIn={this.setLoggedIn.bind(this)}/>
      {/* <Route exact path='/:username/vinyls' render={() => <VinylContainer vinyls={vinyls} handleSubmit={this.handleSubmit} deleteVinyl={this.deleteVinyl}/>} setLoggedIn={this.setLoggedIn.bind(this)}/> */}
      </ThemeProvider>
      
    </div>
  );
}

}

export default App;
