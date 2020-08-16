import React, { Component } from 'react';
import './team-component.css';

class TeamComponent extends Component {
    constructor(props) {
        super(props);
        this.team = this.props.team;
        this.teamIndex = this.props.teamIndex;
    }

    componentDidMount() {
        
    }

    formValidation() {
        
    }

    removeChannel(index) {
        
    }

    addChannel() {
        
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
                        <input placeholder="Channel name"/>
                        <button>&#8853;</button>
                    </span>
                </div>
            }
            {
                this.team &&
                <ul className="one">
                    { this.team.channels && this.team.channels.map((channel, idx) => (
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
