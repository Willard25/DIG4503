import React from 'react';
import './index.css';

class LeaderBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      leader: [],
      second: []
    }
  }

  componentDidMount() {
    fetch("https://api.pubg.com/shards/steam/leaderboards/division.bro.official.pc-2018-06/squad-fpp?page[number]=0", {
      "headers": {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkYzBiMzQzMC02MjZjLTAxMzgtMmFkMi0yNzM4NDc2M2UzNjgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTg3MDgxODM4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6IndpbGxhcmRtYXJsZXktIn0.6sGwzo59EiDE_AFEYYypAGmrEE2kRk0Gw6uT6iRgYzE",
        "Accept": "application/json"
      }
    })
    .then((res) => res.json())
    .then((result) => {
      let test = result.included;
      this.setState({
        leader: test[0].attributes,
        second: test[0].attributes.stats
      })
    })
  }

  render() {
    return (
      <div className="statcard">
        <div className="lbtitle">Steam Leaderboards</div>
        <div>
          <div className="lbstatsuser">{this.state.leader.name} </div>
          <span className="lbstats"><b>Rank:</b> {this.state.leader.rank} </span>
        </div>
        <div>
          <span className="lbstats"><b>Wins:</b> {this.state.second.wins} </span>
          <span className="lbstats"><b>Kills:</b> {this.state.second.kills} </span>
          <span className="lbstats"><b>K/D:</b> {this.state.second.killDeathRatio} </span>
          <span className="lbstats"><b>Games:</b> {this.state.second.games} </span>
        </div>
      </div>
    );
  }
}

export default LeaderBoard;