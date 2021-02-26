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

render(){

const vinyls = this.state.vinyls

  return (
    <div className="App">
      <TopNavBar/>
      <VinylContainer vinyls={vinyls}/>
    </div>
  );
}

}

export default App;
