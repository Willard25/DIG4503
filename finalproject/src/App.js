import React from 'react';
import LeaderBoard from "./components/LeaderBoard/index.js";
import FindName from "./components/FindName/index.js";
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="titlecontainer">
          <div className="title">Playerunknown's Battlegrounds</div>
        </div>
        <div className="lbcontainer"><LeaderBoard /></div>
        <div className="fncontainer"><FindName /></div>
      </div>
    );
  }
}

export default App;
