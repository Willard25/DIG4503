import React from 'react';
import './index.css';

class SeasonStats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     solostats:[],
     duostats:[],
     squadstats:[]
    }
  }

  findstats (){
    fetch("https://api.pubg.com/shards/steam/players/" + this.props.sendid + "/seasons/division.bro.official.pc-2018-06", {
      "headers": {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkYzBiMzQzMC02MjZjLTAxMzgtMmFkMi0yNzM4NDc2M2UzNjgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTg3MDgxODM4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6IndpbGxhcmRtYXJsZXktIn0.6sGwzo59EiDE_AFEYYypAGmrEE2kRk0Gw6uT6iRgYzE",
        "Accept": "application/json"
      }
    })
    .then((res) => res.json())
    .then((result) => {
      this.setState({
        solostats: result.data.attributes.gameModeStats.solo,
        duostats: result.data.attributes.gameModeStats.duo,
        squadstats: result.data.attributes.gameModeStats.squad,
      })
    })
  }

  componentDidUpdate () {
    if(this.props.sendid == "") {
      //do nothing
    }else {
      this.findstats();
    }
  }
  

  render() {
    return (
      <div className="seasoncard">
        <div className="seasontitle">Season Stats</div>
        <div className="statscard">
          <div className="stattitle">Solo Stats</div>
          <span className="stats">
            <span className="stat">Wins: </span><span className="number">{this.state.solostats.wins}</span>
          </span>
          <span className="stats">
            <span className="stat">Loses: </span><span className="number">{this.state.solostats.losses}</span>
            </span>
          <span className="stats">
            <span className="stat">Damage: </span><span className="number">{this.state.solostats.damageDealt}</span>
          </span>
          <span className="stats">
            <span className="stat">Kills: </span><span className="number">{this.state.solostats.kills}</span>
          </span>
          <span className="stats">
            <span className="stat">Assists: </span><span className="number">{this.state.solostats.assists}</span>
          </span>
          <span className="stats">
            <span className="stat">Revives: </span><span className="number">{this.state.solostats.revives}</span>
          </span>
          <span className="stats">
            <span className="stat">Top 10s: </span><span className="number">{this.state.solostats.top10s}</span>
          </span>
        </div>
        <div className="statscard">
          <div className="stattitle">Duo Stats</div>
          <span className="stats">
            <span className="stat">Wins: </span><span className="number">{this.state.duostats.wins}</span>
          </span>
          <span className="stats">
            <span className="stat">Loses: </span><span className="number">{this.state.duostats.losses}</span>
          </span>
          <span className="stats">
            <span className="stat">Damage: </span><span className="number">{this.state.duostats.damageDealt}</span>
          </span>
          <span className="stats">
            <span className="stat">Kills: </span><span className="number">{this.state.duostats.kills}</span>
          </span>
          <span className="stats">
            <span className="stat">Assists: </span><span className="number">{this.state.duostats.assists}</span>
          </span>
          <span className="stats">
            <span className="stat">Revives: </span><span className="number">{this.state.duostats.revives}</span>
          </span>
          <span className="stats">
            <span className="stat">Top 10s: </span><span className="number">{this.state.duostats.top10s}</span>
          </span>
        </div>
        <div className="statscard">
          <div className="stattitle">Squad Stats</div>
          <span className="stats">
            <span className="stat">Wins: </span><span className="number">{this.state.squadstats.wins}</span>
          </span>
          <span className="stats">
            <span className="stat">Loses: </span><span className="number">{this.state.squadstats.losses}</span>
          </span>
          <span className="stats">
            <span className="stat">Damage: </span><span className="number">{this.state.squadstats.damageDealt}</span>
          </span>
          <span className="stats">
            <span className="stat">Kills: </span><span className="number">{this.state.squadstats.kills}</span>
          </span>
          <span className="stats">
            <span className="stat">Assists: </span><span className="number">{this.state.squadstats.assists}</span>
          </span>
          <span className="stats">
            <span className="stat">Revives: </span><span className="number">{this.state.squadstats.revives}</span>
          </span>
          <span className="stats">
            <span className="stat">Top 10s: </span><span className="number">{this.state.squadstats.top10s}</span>
          </span>
        </div>
      </div>
    );
  }
}

export default SeasonStats;