import React from 'react';

// inner components
import Container from '../../components/Container/Container.component';

import './Challenge1Home.styles.css';

function DashboardHome() {
    return (
        <div className='dashboard-home'>
            <Container
                showAnnouncementHeader = {true}
                showAnnouncementList = {true}
                showStatisticsList = {false}
                showStatisticsHeader = {false}
            />
            <Container 
                showAnnouncementHeader = {false}
                showAnnouncementList = {false}
                showStatisticsList = {true}
                showStatisticsHeader = {true}
            />
        </div>
    )
}

export default DashboardHome;