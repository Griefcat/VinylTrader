import React, {Component, useState} from 'react';
import './App.css';
import VinylContainer from './containers/VinylContainer'
import TopNavBar from './containers/TopNavBar'
import {Route} from 'react-router-dom'
import LandingPage from './containers/LandingPage'
import NewUserModal from './components/NewUserModal'



const url = 'http://localhost:3000/vinyls'
const axios = require('axios').default
// const [loggedIn, setLoggedIn] = useState(false)

class App extends Component {

state = {
  vinyls: [],
  loggedIn: false,
}

componentDidMount(){
  fetch(url)
    .then(response => response.json())
    .then((vinyls) => 
      console.log(vinyls)
      (this.setState({vinyls: vinyls}))
    )
    .catch((error) => {
      console.error(error);
    })
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

  setLoggedIn = () => {
    this.setState({loggedIn: true})
  }
  
render(){

const vinyls = this.state.vinyls


  return (
    <div className="App">
      
      <TopNavBar/>
      <Route exact path='/' render={() => <LandingPage test={'test'} setLoggedIn={this.setLoggedIn.bind(this)}/>}/>
      <Route exact path='/newuser' render={() => <NewUserModal test={'test'} setLoggedIn={this.setLoggedIn.bind(this)}/>}/>
      <Route exact path='/vinyls' render={() => <VinylContainer vinyls={vinyls} handleSubmit={this.handleSubmit} deleteVinyl={this.deleteVinyl}/>}/>

      
      
    </div>
  );
}

}

export default App;
