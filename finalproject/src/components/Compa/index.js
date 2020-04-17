import React from 'react';
//import './App.css';

class Compa extends React.Component {

  constructor(props) {
    super(props);
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
            custom: result.data
        })
    });
  }

  render() {
    return (
      <div className="temp">
        <div>
          
        </div>
        <div>{this.state.custom}</div>
      </div>

    );
  }
}

export default Compa;

/*
{this.state.custom.map((value, index) => <p key={index} 
            id={value.id}
          />)}
*/