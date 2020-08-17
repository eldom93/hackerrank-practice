import React, { Component } from "react";
import "./team-component.css";
import TeamList from "../team-list/team-list";
var arry = [];
class TeamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      channelInput: "",
      sorted: [],
      counter: 0
    };
    this.team = this.props.team;
    this.teamIndex = this.props.teamIndex;
  }

  componentDidMount() {}

  formValidation(input) {
    if (input === "" || isNaN(input) !== true) {
      this.setState({
        disabled: true,
      });
    } else {
      this.setState({
        disabled: false,
      });
    }
  }

  removeChannel(name, index) {
    //console.log(this.team.channels);

    this.setState({
      teams: this.team.channels.splice(this.team.channels[index], 1),
    });
  }

  addChannel(event) {
      console.log(this.state.counter);
    arry.push(
      this.props.team.valueOf("Team1").channels[0].name,
      this.state.channelInput
    );
    console.log("this.team", this.team.name.valueOf("Team1"), arry.sort());
    this.setState({
      teams: this.team.channels.push({
        name: this.state.channelInput,
        index: this.team.channels.length + 1
      }),
    });
    arry.sort();
    console.log(this.createTeamChannelList());
  }

  sort(e) {
    var items = arry;
    this.setState({
      sorted: items,
      counter: this.state.counter+=1
    });
console.log(this.state.counter);
    switch(this.state.counter){
        case 1:
            items.sort(function (a, b) {
              return a.localeCompare(b);
            });
            console.log(items);
            return items;
        case 2: 
            items.sort(function (a, b) {
                return b.localeCompare(a);
            });
          console.log(items);
          return items;
        case 3: 
            items.sort(function (a, b) {
                return a.localeCompare(b);
            });
            console.log(items);
            return items;
        case 4:
            this.state.counter = 1;
            return this.state.counter;
    }
  }
  saveInput(e) {
    this.formValidation(e.target.value);
    this.setState({
      channelInput: e.target.value,
    });
  }
  createTeamChannelList() {
    for (
      var i = 0;
      i < this.props.team.valueOf("Team1").channels.length + 1;
      i++
    ) {
      arry.push(this.props.team.valueOf("Team1"));
      arry = this.props.team.valueOf("Team1").channels.map(function (channel) {
        return channel.name;
      });
    }
    arry.sort();
    console.log(arry);
  }
  render() {
    return (
      <div>
        {this.team && (
          <div>
            <span className="team-name">{this.team.name}</span>
            <button
              id={this.team.channels}
              onClick={(e) => this.sort(e)}
              className="sort"
            >
              &#8597;
            </button>

            <span className="add-channel">
              <input
                onChange={(e) => this.saveInput(e)}
                placeholder="Channel name"
              />
              {this.state.disabled ? (
                <button disabled>&#8853;</button>
              ) : (
                <button onClick={(event) => this.addChannel(event)}>
                  &#8853;
                </button>
              )}
            </span>
          </div>
        )}
        {this.team && (
          <ul className="one">
            {this.team.channels &&
              this.team.channels.map((channel, idx) => (
                <li className="channel-name" key={channel.index}>
                  <span channel={channel}>
                    {this.state.sorted.length > 0
                      ? this.state.sorted[idx]
                      : channel.name}
                  </span>
                  <button
                    id={idx}
                    onClick={(idx) => this.removeChannel(channel.name, idx)}
                  >
                    &#8854;
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TeamComponent;
