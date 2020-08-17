import React, { Component } from 'react';
import './team-component.css';
import TeamList from '../team-list/team-list';

class TeamComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            disabled: true,
            channelInput: ''
        }
        this.team = this.props.team;
        this.teamIndex = this.props.teamIndex;
    }

    componentDidMount() {
        
    }

    formValidation(input) {
            if(input === "" || isNaN(input) !== true){
                this.setState({
                    disabled: true
                })
            }
            else{
                this.setState({
                    disabled: false
                }) 
            }
    }

    removeChannel(name, index) {
//console.log(this.team.channels);

 this.setState({
    teams:   this.team.channels.splice(this.team.channels[index -1], 1)
})   
    }

    addChannel(event) {
        this.setState({
            teams:  this.team.channels.push( {
                name: this.state.channelInput,
                index: this.team.channels.length + 1
              })
        })

        
    }
    
    sort(a, b) {
        var z = Array.from(this.team.channels).sort((a, b) => a - b);
        console.log(z);
        this.team.channels.sort(function(a,b){
            if (a > b) {
                return -1;
            }
            if (b > a) {
                return 1;
            }
            return 0;
        })
        console.log(z)
         
    }
    saveInput(e){
        this.formValidation(e.target.value);
        this.setState({
            channelInput: e.target.value
        })
    }
    render() {
        return (
        <div>
            {
                this.team && 
                <div>
                    <span className="team-name">{this.team.name}</span>
                    <button id={this.team.channels} onClick={(e)=> this.sort(e)} className="sort">&#8597;</button>
              
                    <span className="add-channel">
                        <input onChange={(e)=> this.saveInput(e)} placeholder="Channel name"/>
                        {this.state.disabled ? (<button disabled>&#8853;</button>) : (
                        <button onClick={(event)=> this.addChannel(event)}>&#8853;</button>
                    )}
                    </span>
                </div>
            }
            {
                this.team &&
                <ul className="one">
                
                    { this.team.channels && this.team.channels.map((channel, idx) => (
                     <li className="channel-name" key={channel.index}>
                            <span channel={channel}>{channel.name}</span>
                            <button id={idx} onClick={(idx)=> this.removeChannel(channel.name, idx)}>&#8854;</button>
                        </li>
                    ))}
                </ul>
            }
        </div>
        );
    }
}

export default TeamComponent;
