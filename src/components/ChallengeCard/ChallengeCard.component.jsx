import React from 'react'
import { withRouter } from 'react-router-dom'

import './ChallengeCard.styles.scss'

const ChallengeCard = ({ name, linkUrl, match, history }) => (
    <div 
        className='challenge-card neon-blue' 
        style={{fontSize: '160%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
    >
        {name}
        <button
            className='btn btn-outline-primary' 
            style={{width: '40%', height: '20%'}}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
        ورود</button>
    </div>
)

export default withRouter(ChallengeCard)