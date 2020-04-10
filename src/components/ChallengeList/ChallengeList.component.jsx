import React from 'react'
import { connect } from 'react-redux'

import './ChallengeList.styles.scss'
import ChallengeCard from '../ChallengeCard/ChallengeCard.component'

const ChallengeList = ({ challenges }) => (
    <div className='challenge-list'>
        {challenges.map(({id, ...others}) => 
            <ChallengeCard 
                key = {id}
                {...others}
            />
        )}
    </div>
)

const mapStateToProps = state => {
    return {
        challenges: state.Challenges
    }
}

export default connect(mapStateToProps)(ChallengeList)