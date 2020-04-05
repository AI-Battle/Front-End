import React from 'react'

import ExpansionPanel from '../ExpansionPanel/ExpansionPanel'

// stles
import './Scores.styles.scss'

function Scores({ Teams }) {

    const renderTeams = Teams.map(team => {
        return (
            <ExpansionPanel 
                id = {team.id}
                teamName = {team.teamName}
                ranking = {team.ranking}
                score = {team.score}
                winPercentage = {team.winPercentage}
                win = {team.win}
                equals = {team.equals}
                lost = {team.lost}
            />
        )
    })
    return (
        renderTeams
    )
}

// 4620380
// 365223506-503

export default Scores

{/*<div className='score-panel-title__team-name'>
                    {team.teamName}
                </div>
                <div className='score-panel-title__team-statistics'>
                    <span>{team.ranking}</span>
                    <span>{team.score}</span>
                    <span>{team.winPercentage}</span>
                    <span>{team.win}</span>
                    <span>{team.equals}</span>
                    <span>{team.lost}</span>
                </div>*/}