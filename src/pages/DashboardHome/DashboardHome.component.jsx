import React from 'react';

// styled components
import { Background } from '../../styled-components/Background.styles';
import { ContainersDiv } from './DashboardHome.styles';


// inner components
import Container from '../../components/Container/Container.component';

import './DashboardHome.styles.css';

function DashboardHome() {
    return (
        <div className='dashboard-home'>
            <Container
                backgroundColor = 'rgb(45, 10, 79)'
                Width = '40%'
                Height = '54%'
                MarginTop = '10%'
                showAnnouncementHeader = {true}
                showAnnouncementList = {true}
                showStatisticsList = {false}
                showStatisticsHeader = {false}
            />
            <Container 
                backgroundColor = 'rgb(45, 10, 79)'
                Width = '35%'
                Height = '54%'
                MarginTop = '10%'
                MarginRight = '42%'
                showAnnouncementHeader = {false}
                showAnnouncementList = {false}
                showStatisticsList = {true}
                showStatisticsHeader = {true}
            />
        </div>
    )
}

export default DashboardHome;