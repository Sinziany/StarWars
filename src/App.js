import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
import Compare from './Compare';
import Scroll from './Scroll';

class App extends Component  {
  constructor () {
    super()
    this.state = {
      films: []
    }
  }

componentDidMount(){
  fetch(`https://swapi.co/api/films/`)
    .then(response => response.json())
    .then(response => response.results)
    .then(response => response.sort(Compare))
    .then(movies => this.setState({films: movies}));
}
  render (){
    const {films} = this.state;
    return(
    <div className = 'tc'>
      <header className="App-header tc">
        <h1 className= 'f1 tc'>Star  Wars</h1>
        <img className = 'ma4 br4 w-40 tc' alt='StarWars' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoozGDrykxkHFNz33fJb7_J9JQuUfCb4SCdU5chl3MotUDtQ_L&s'/>
      </header>
      <Scroll >
        <CardList films = {films}/>
      </Scroll> 
    </div>
    );
  }
}

export default App;

