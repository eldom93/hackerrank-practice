import React, { Component } from 'react';
import './team-component.css';

class TeamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableButton: true,
      channelName: ''
    }
    this.team = this.props.team;
    this.teamIndex = this.props.teamIndex;
  
  }

  
 
  componentDidMount() {

  }

  formValidation(input) {
    if (input.target.value === "" || isNaN(input.target.value) !== true) {
      this.setState({
        disableButton: true,
        channelName: input.target.value
      });
    } else {
      this.setState({
        disableButton: false,
        channelName: input.target.value
      });
    }
  }

  removeChannel(index) {

  }

  addChannel(event) {
    console.log(event);
      this.team.valueOf("Team1").channels.push({
        name:this.state.channelName,
        index:this.team.channels.length + 1,
        date: new Date()
      }); 
      this.team.valueOf("Team2").channels.push({
        name:this.state.channelName,
        index:this.team.channels.length + 1,
        date: new Date()
      }); 
      console.log(this.team.valueOf("Team1").channels);
      let channelList = document.querySelector('#channelList');
      let newChannelNames = [];
        newChannelNames.push(
         [ {name: this.team.channels[this.team.channels.length - 1].name},
          {index: this.team.channels.length},
          {date: this.team.channels.date}]);
      
      let nodes = newChannelNames.map(channel => {
          var btn = document.createElement("button");
          var span = document.createElement("span");
          let li = document.createElement('li');
          li.className = "channel-name";
          li.key = channel[1].index;
          li.innerHTML = span;
          span.innerHTML = channel[0].name;
          li.innerHTML = btn;
          btn.innerHTML = '&#8854';
        return li;
      });
    channelList.append(...nodes);
  }

  sort() {

  }

  render() {
    return (
      <div>
        {
          this.team &&
          <div>
            <span className="team-name">{this.team.name}</span>
            <button className="sort">&#8597;</button>
            <span className="add-channel">
              <input value={this.state.channelName} onChange={(input)=>this.formValidation(input)} placeholder="Channel name" />
              {this.state.disableButton ? (<button disabled>&#8853;</button>)  : (<button onClick={(event) => 
              this.addChannel(event)}>&#8853;</button>)}
            </span>
          </div>
        }
        {
          this.team &&
          <ul id="channelList" className="one">
            {this.team.channels && this.team.channels.map((channel, idx) => (
              <li className="channel-name" key={channel.index}>
                <span>{channel.name}</span>
                <button>&#8854;</button>
              </li>
            ))}
          </ul>
        }
      </div>
    );
  }
}

export default TeamComponent;