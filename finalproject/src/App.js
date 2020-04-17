import React from 'react';
import Lb from "./components/Lb/index.js";
import FindName from "./components/FindName/index.js";
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Lb />
        <FindName />
      </div>
    );
  }
}

export default App;
