import React, {Component} from 'react';
import './App.css';
import VinylContainer from './containers/VinylContainer'


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
    )
    .catch((error) => {
      console.error(error);
    })
}

render(){
  return (
    <div className="App">
      <h1>hey can we get something on the screen plz</h1>
      <VinylContainer/>
    </div>
  );
}

}

export default App;
