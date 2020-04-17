import React from 'react';
//import './App.css';

class FindName extends React.Component {

  constructor(props) {
    super(props);
    this.inputUsername = React.createRef();
    this.state = {custom: []};
  }

  componentDidMount() {
    fetch("https://api.pubg.com/shards/steam/players?filter[playerNames]=1Chris56", {
      "headers": {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkYzBiMzQzMC02MjZjLTAxMzgtMmFkMi0yNzM4NDc2M2UzNjgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTg3MDgxODM4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6IndpbGxhcmRtYXJsZXktIn0.6sGwzo59EiDE_AFEYYypAGmrEE2kRk0Gw6uT6iRgYzE",
        "Accept": "application/json"
      }
    })
    .then((res) => res.json())
    .then((result) => {
      this.setState({
        custom: result.links.self
      })
    })
  }

  render() {
    return (
      <div className="temp">
        <div>
          <p>Enter Username</p><br />
          <button type="submit" onSubmit={this.findName}>Find Player</button>
        </div>
        <div>{this.state.custom}</div>
      </div>
    );
  }
}

export default FindName;

//<input type="text" id="username" ref={this.inputUsername} /><br />