import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherDisplay from './weather'

const zip = 12345;

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <WeatherDisplay zip={zip} />
        {PLACES.map((place, index) => (
          <button key={index} onClick = { ()=>(console.log(index)) } > {place.name} </ button>
        ))}
      </div>
    );
  }
}

export default App;
