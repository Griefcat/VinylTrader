import React, {Component} from 'react';
import './App.css';
import VinylContainer from './containers/VinylContainer'
import TopNavBar from './containers/TopNavBar'
import {Route} from 'react-router-dom'
import LandingPage from './containers/LandingPage'


const url = 'http://localhost:3000/vinyls'
const axios = require('axios').default

class App extends Component {

state = {
  vinyls: [],
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
  // let id = vinyl.id
  // const currentVinyls = this.state.vinyls;

  // this.setState({
  //   vinyls: currentVinyls.filter(vinyl => vinyl.id !== id),
  // });
  
  //   axios.delete(`http://localhost:3001/vinyls/${id}`, this.state)
  //   .then(response => {
  //     if (response.status === 'error') {
  //       this.setState({
  //         vinyls: currentVinyls,
  //       });
  //     } else {
  //     }
  //   });
  // }

// deleteVinyl(vinyl){
//   fetch('http://localhost:3001/vinyls/${id}'), {
//     method: 'DELETE'
// }.then(() => { 

//  })
// }

render(){

const vinyls = this.state.vinyls

  return (
    <div className="App">
      
      <TopNavBar/>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/vinyls' render={() => <VinylContainer vinyls={vinyls} handleSubmit={this.handleSubmit} deleteVinyl={this.deleteVinyl}/>}/>

      
      
    </div>
  );
}

}

export default App;
