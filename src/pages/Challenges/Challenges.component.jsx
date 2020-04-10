import React from 'react'

import './Challenges.styles.css'

import ChallengeList from '../../components/ChallengeList/ChallengeList.component'

const Challenges = () => (
    <div className='challenges'>
        <div class="container">
            <div class="neon-orange">Challenges</div>
        </div>
        <ChallengeList />
    </div>
)

export default Challenges