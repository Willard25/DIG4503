import React from 'react';
import SeasonStats from "./SeasonStats/index.js";
import './index.css';

class FindName extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      playerid: [],
      err: ""
    }; 
    this.nameRef= React.createRef();
  }

  active () {
      fetch("https://api.pubg.com/shards/steam/players?filter[playerNames]=" + this.nameRef.current.value, {
      "headers": {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkYzBiMzQzMC02MjZjLTAxMzgtMmFkMi0yNzM4NDc2M2UzNjgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTg3MDgxODM4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6IndpbGxhcmRtYXJsZXktIn0.6sGwzo59EiDE_AFEYYypAGmrEE2kRk0Gw6uT6iRgYzE",
        "Accept": "application/json"
      }
    })
    .then((res) => res.json())
    .then((result) => {
      if (result === {"errors": [{"title": "Not Found", "detail": "No Players Found Matching Criteria"}]}) {
        this.setState({err: "Player not found!"})
      }else {
        let data = result.data;
        this.setState({
          playerid: data[0].id
        })
      }
    })
  }

  getValue = (event) => {
    event.preventDefault();
    const name = this.nameRef.current.value;
    this.setState({"name": name});
    if(name === "") {
      //do nothing
    }else{
      this.active();
    }
  }

  render() {
    return (
      <div>
        <div className="namesearch">
          <div className="formtext">Search for Steam Usernames</div>
          <form className="inputform" onSubmit={this.getValue}>
            <input className="inputbox" type="text" ref={this.nameRef} />
            <button className="button">SUBMIT</button>
          </form>
          <p>{this.state.err}</p>
          <div className="user">{this.state.name}</div>
        </div>
        <SeasonStats sendid = {this.state.playerid} />
      </div>
    );
  }
}

export default FindName;