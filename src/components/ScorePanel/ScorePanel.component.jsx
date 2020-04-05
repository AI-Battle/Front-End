import React from 'react';
import { connect } from 'react-redux';

// components
import ScorePanelHeader from './ScorePanelHeader.component'
import ScorePanelContent from './ScorePanelContent.component'

import './ScorePanel.styles.css'

function ScorePanel({ Teams, FriendTeams, totalTeams, friendTeams }) {

    const renderData = () => {
        if(totalTeams) {
            return Teams
        } else if (friendTeams) {
            return FriendTeams
        }
    }

    return ( 
        <div className='score-panel'>
            {/*<ScorePanelHeader />*/}
            <ScorePanelContent
                Teams = {renderData()}
            />
        </div>
    )
    
};

const mapStateToProps = state => {
    console.log(state)
    return {
        Teams: state.Teams,
        FriendTeams: state.FriendTeams
    }
}

export default connect(mapStateToProps)(ScorePanel);