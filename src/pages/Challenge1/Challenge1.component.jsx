import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import '../../node_modules/jquery'
// import '../../node_modules/popper.js.js';

import DashboardHeader from '../../components/DashboardHeader/DashboardHeader.component';
import DashboardSideMenu from '../../components/DashboardSideMenu/DashboardSideMenu.component'
import './Challenge1.styles.css'

// Pages
import ScoreBoard from '../ScoreBoard/ScoreBoard.component';
import Announcements from '../Announcements/Announcements.component';
import EducationalContent from '../EducationalContent/EducationalContent.component';
import DashboardHome from '../Challenge1Home/Challenge1Home.component';
import Resources from '../Resources/Resources.component';
import Rules from '../Rules/Rules.component';
import DashboardTeam from '../TeamSelection/dashboardTeam.component'

const Challenge1 = () => {
    return (
        <div className='challenge1'>
            <DashboardHeader />
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <DashboardSideMenu />
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginBottom: '5%', height: '100vh' }}>
                    <Switch>
                        <Route exact path='/challengeschallenges/challenge1' component={DashboardHome} />
                        <Route exact path='/challengeschallenges/challenge1/rules' component={Rules} />
                        <Route exact path='/challengeschallenges/challenge1/announcements' component={Announcements} />
                        <Route exact path='/challengeschallenges/challenge1/resources' component={Resources} />
                        <Route exact path='/challengeschallenges/challenge1/educationalcontent' component={EducationalContent} />
                        <Route exact path='/challengeschallenges/challenge1/scoreboard' component={ScoreBoard} />
                        <Route exact path='/challengeschallenges/challenge1/teamselection' component={DashboardTeam} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Challenge1;
