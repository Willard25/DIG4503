import React from 'react';
//import './App.css';

class Lb extends React.Component {

  constructor(props) {
    super(props);
    this.state = {leader: []}
  }

  async componentDidMount() {
    const response = await fetch("https://api.pubg.com/shards/steam/leaderboards/division.bro.official.pc-2018-06/squad-fpp?page[number]=0", {
      "headers": {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkYzBiMzQzMC02MjZjLTAxMzgtMmFkMi0yNzM4NDc2M2UzNjgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTg3MDgxODM4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6IndpbGxhcmRtYXJsZXktIn0.6sGwzo59EiDE_AFEYYypAGmrEE2kRk0Gw6uT6iRgYzE",
        "Accept": "application/json"
      }
    });
    const data = await response.json();
    this.setState({leader: data.included[0].type});
  }

  render() {
    return (
      <div className="temp">
        <div>{this.state.leader}</div>
      </div>
    );
  }
}

export default Lb;