import React, { Component } from 'react';
import './team-component.css';

class TeamComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            disabled: true
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

    removeChannel(index) {
        console.log(index.target.id);
    }

    addChannel() {
        
    }
    
    sort() {
        
    }
    saveInput(e){
        this.formValidation(e.target.value);
        this.setState({
            input: e.target.value
        })
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
                        <input onChange={(e)=> this.saveInput(e)} placeholder="Channel name"/>
                        {this.state.disabled ? (<button disabled>&#8853;</button>) : (
                        <button  onClick={(event)=> this.addTeam(event)}>&#8853;</button>
                    )}
                    </span>
                </div>
            }
            {
                this.team &&
                <ul className="one">
                    { this.team.channels && this.team.channels.map((channel, idx) => (
                        <li className="channel-name" key={channel.index}>
                            <span>{channel.name}</span>
                            <button id={idx} onClick={(index)=> this.removeChannel(index)}>&#8854;</button>
                        </li>
                    ))}
                </ul>
            }
        </div>
        );
    }
}

export default TeamComponent;
