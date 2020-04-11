import React from 'react'

import PopupScores from '../PopupScores/PopupScores.component'

// styles
import './Scores.styles.scss'

function Scores({ Teams }) {

    const renderTeams = Teams.map(team => {
        return (
            <PopupScores 
                team={team}
            />
        )
    })
    return (
        renderTeams
    )
}

export default Scores


