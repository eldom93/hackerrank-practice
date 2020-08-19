import React, { Component } from 'react';
import './team-component.css';
import { v4 as uuidv4 } from 'uuid';
class TeamComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      disableButton: true,
      channelInput: '',
      channelNamesAdded: []
    }
    this.team = this.props.team;
    this.teamIndex = this.props.teamIndex;
    this.removeChannel = this.removeChannel.bind(this);
  }

  componentDidMount() {

  }

  formValidation(input) {
    if (input === "" || isNaN(input) !== true) {
      this.setState({
        disableButton: true
      });
    } else {
      this.setState({
        disableButton: false
      });
    }
  }
  saveInput(e) {
  this.formValidation(e.target.value);
    this.setState({
      channelInput: e.target.value,
    });
  }

  removeChannel(e) {
    this.team.channels.splice(e.target.id-1,1);
    this.setState({
      channelNamesAdded: this.state.channelNamesAdded.splice(e.target.id -1, 1)
    })
  }

  addChannel(event) {
    this.team.channels.push({
       name: this.state.channelInput,
       index: this.team.channels.length + 1,
       date: new Date()
     });
     this.setState({
      channelNamesAdded: [...this.state.channelNamesAdded, this.state.channelInput],
      channelInput: '',
    });

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
              <input value={this.state.channelInput} onChange={(e)=>this.saveInput(e)} placeholder="Channel name" />
              {this.state.disableButton ? (<button disabled>&#8853;</button>)  : (
                <button onClick={(event) => this.addChannel(event)}>&#8853;</button>)}
            </span>
          </div>
        }
        {
          this.team &&
          <ul id="channelList" className="one">
            {this.team.channels && this.team.channels.map((channel) => (
              <li className="channel-name" key={uuidv4()}>
                <span>{channel.name}</span>
                <button id={channel.index} onClick={(e)=>this.removeChannel(e)}>&#8854;</button>
              </li>
            ))}
          </ul>
        }
      </div>
    );
  }
}

export default TeamComponent;
