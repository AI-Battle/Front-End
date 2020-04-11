import React, { useState } from 'react';
import sidbandi from '../../images/rank.png'
import friend1 from '../../images/friend1.png'

import './ScoreBoard.styles.css'

import ScorePanel from '../../components/ScorePanel/ScorePanel.component'

const DashboardTeam = () => {

    const [display, setDisplay] = useState('1')

    const handleTab = (e) => {
        console.log('run')
        const first = document.querySelector(".dashboard-team__tabs__single--active")

        const target = e.currentTarget
        const id = target.id;
        if (target.classList.contains('dashboard-team__tabs__single--active')) {
            return
        } else {
            first.classList.remove('dashboard-team__tabs__single--active')
            target.classList.add('dashboard-team__tabs__single--active')
            setDisplay(id)
        }

    }

    const renderContent = () => {
        switch(display) {
            case '1':
                return (
                    <ScorePanel 
                        totalTeams = {true}
                        friendTeams = {false}
                    />
                )
            case '2':
                return (
                    <ScorePanel
                        totalTeams = {false}
                        friendTeams = {true}
                    />
                )
            case '3':
                return 3
            default:
                return 4
        }
    }

    return (
        <div className='dashboard-team' style={{height: '100vh'}}>
            {console.log('rendering')}
            <div className='dashboard-team__tabs' >
                
                <div id="2" className='dashboard-team__tabs__single pt-2' onClick={handleTab}>

                    <div className='dashboard-team__tabs__single__icon'>
                        <img src={friend1} width="24" height="24" viewBox="0 0 24 24" fill="#000" alt='friend' />
                    </div>

                    <div className='dashboard-team__tabs__single__title'>
                        دوستانه
                    </div>

                </div>

                <div id="1" className='dashboard-team__tabs__single dashboard-team__tabs__single--active py-2' onClick={handleTab}>

                    <div className='dashboard-team__tabs__single__icon'>
                        <img src={sidbandi} width="24" height="24" viewBox="0 0 24 24" fill="#000" alt='lig' />
                    </div>

                    <div className='dashboard-team__tabs__single__title'>
                        لیگ
                    </div>

                </div>

            </div>

            <div className='dashboard-box'>
                {renderContent()}
            </div>
        </div>
    );
};

export default DashboardTeam;
