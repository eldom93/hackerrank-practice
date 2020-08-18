import React, { Component } from 'react';
import TeamComponent from '../team-component/team-component';
import './team-list.css';

class TeamList extends Component {
    constructor(props) {
        super(props);
        this.teams = [];
        this.teams.push({
            name: 'Team1',
            timestamp:new Date(),
            channels: [{
              name: 'Channel1',
              index: 1,
              date: new Date()
            },
            {
              name: 'Channel2',
              index: 2,
              date: new Date()
            }]
        });
        this.teams.push({
            name: 'Team2',
            channels: [{
              name: 'Channel1',
              index: 1,
              date: new Date()
            },
            {
              name: 'Channel2',
              index: 2,
              date: new Date()
            }]
        });
        this.state = {
            teams: this.teams,
            input: "",
            disabled:true,
        };  
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

    addTeam(event) {
        this.setState({
            teams:   this.teams.push({
                name: this.state.input,
                channels: []
            })
        })
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
                <div className="teams-list">
                    <ul>
                        { this.teams && this.teams.map((team, idx) => (
                            <li key={idx}>
                                <TeamComponent team={team} />
                            </li>
                        ))}
                    </ul>  
                </div>
                <div className="add-team">
                    <b>Add Team</b>
                    <input onChange={(e)=> this.saveInput(e)} placeholder="Team name"/>
                    {this.state.disabled ? (<button disabled>&#8853;</button>) : (
                        <button  onClick={(event)=> this.addTeam(event)}>&#8853;</button>
                    )}
                    
                </div>
            </div>
        );
    }
}

export default TeamList;
