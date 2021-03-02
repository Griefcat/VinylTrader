import React, {Component} from 'react';
import './App.css';
import VinylContainer from './containers/VinylContainer'
import TopNavBar from './containers/TopNavBar'


const url = 'http://localhost:3000/vinyls'


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

render(){

const vinyls = this.state.vinyls

  return (
    <div className="App">
      <TopNavBar/>
      <VinylContainer vinyls={vinyls} handleSubmit={this.handleSubmit}/>
    </div>
  );
}

}

export default App;
