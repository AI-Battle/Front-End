import React from 'react'

// components
import ScorePanelTitle from './ScorePanelTitles.component'
import Scores from './Scores.component'

// styles
import './ScorePanelContent.styles.scss'

function ScorePanelContent({ Teams }) {
    return (
        <div className='score-panel-content mt-5'>
            <ScorePanelTitle />
            <Scores 
                Teams = {Teams}
            />
        </div>
    )
}

export default ScorePanelContent
