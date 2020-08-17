import React, { Component } from 'react';
import TeamComponent from '../team-component/team-component';
import './team-list.css';

class TeamList extends Component {
    constructor(props) {
        super(props);
        this.teams = [];
        this.teams.push({
            name: 'Team1',
            channels: [{
              name: 'Channel1',
              index: 1
            },
            {
              name: 'Channel2',
              index: 2
            }]
        });
        this.teams.push({
            name: 'Team2',
            channels: [{
              name: 'Channel1',
              index: 1
            },
            {
              name: 'Channel2',
              index: 2
            }]
        });
        this.state = {
            teams: this.teams,
            input: ""
        };
    }

    componentDidMount() {
        
    }

    formValidation() {
        
    }

    addTeam(event) {
    console.log('add team method called',this.state.input)
        this.setState({
            teams:   this.teams.push({
                name: this.state.input,
                channels: []
            })
        })
    }
    saveInput(e){
        this.setState({
            input: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="teams-list">
                    <ul>
                        { this.teams && this.teams.map((team, idx) => (
                            <li key={idx}>{team.name}
                                <TeamComponent/>
                            </li>
                        ))}
                    </ul>  
                </div>
                <div className="add-team">
                    <b>Add Team</b>
                    <input onChange={(e)=> this.saveInput(e)} placeholder="Team name"/>
                    <button onClick={(event)=> this.addTeam(event)}>&#8853;</button>
                </div>
            </div>
        );
    }
}

export default TeamList;
