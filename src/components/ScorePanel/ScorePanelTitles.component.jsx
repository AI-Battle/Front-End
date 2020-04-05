import React from 'react'

import './ScorePanelTitles.styles.scss'

function ScorePanelTitles() {
    return (
        <div className='score-panel-title'>
            <div className='score-panel-title__team-name'>
                تیم
            </div>
            <div className='score-panel-title__team-statistics' style={{marginLeft: '5rem'}}>
                <span>رتبه</span>
                <span>امتیاز</span>
                <span>درصد برد</span>
                <span>برد</span>
                <span>مساوی</span>
                <span>باخت</span>
            </div>
        </div>
    )
}

export default ScorePanelTitles