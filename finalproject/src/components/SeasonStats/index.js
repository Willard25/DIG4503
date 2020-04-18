import React from 'react';
import './index.css';

class SeasonStats extends React.Component {

  statsPage (){
    fetch("https://api.pubg.com/shards/steam/players/account.1af2d885ce4c4f06aace6a4cc92fb0b6/seasons/division.bro.official.pc-2018-06", {
      "headers": {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkYzBiMzQzMC02MjZjLTAxMzgtMmFkMi0yNzM4NDc2M2UzNjgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTg3MDgxODM4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6IndpbGxhcmRtYXJsZXktIn0.6sGwzo59EiDE_AFEYYypAGmrEE2kRk0Gw6uT6iRgYzE",
        "Accept": "application/json"
      }
    })
    .then((res) => res.json())
  }

  render() {
    return (
      <div className="temp">
        <div></div>
      </div>
    );
  }
}

export default SeasonStats;