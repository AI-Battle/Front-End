import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import '../../node_modules/jquery'
// import '../../node_modules/popper.js.js';

import DashboardHeader from '../../components/DashboardHeader/DashboardHeader.component';
import DashboardSideMenu from '../../components/DashboardSideMenu/DashboardSideMenu.component'
import './Dashboard.styles.css'

// Pages
import ScoreBoard from '../ScoreBoard/ScoreBoard.component';
import Announcements from '../Announcements/Announcements.component';
import EducationalContent from '../EducationalContent/EducationalContent.component';
import DashboardHome from '../DashboardHome/DashboardHome.component';
import Resources from '../Resources/Resources.component';
import Rules from '../Rules/Rules.component';
import DashboardTeam from '../TeamSelection/dashboardTeam.component'

const Dashboard = () => {
    return (
        <div className='dashboard-page'>
            <DashboardHeader />
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <DashboardSideMenu />
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Switch>
                        <Route exact path='/dashboard' component={DashboardHome} />
                        <Route exact path='/dashboard/rules' component={Rules} />
                        <Route exact path='/dashboard/announcements' component={Announcements} />
                        <Route exact path='/dashboard/resources' component={Resources} />
                        <Route exact path='/dashboard/educationalcontent' component={EducationalContent} />
                        <Route exact path='/dashboard/scoreboard' component={ScoreBoard} />
                        <Route exact path='/dashboard/teamselection' component={DashboardTeam} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;


{/*<DashboardHeader />
            <div className='sidebar'>
                <DashboardSideMenu />
            </div>
            <div className='main-page'>
                <Switch>
                    <Route exact path='/dashboard' component={DashboardHome} />
                    <Route exact path='/dashboard/rules' component={Rules} />
                    <Route exact path='/dashboard/announcements' component={Announcements} />
                    <Route exact path='/dashboard/resources' component={Resources} />
                    <Route exact path='/dashboard/educationalcontent' component={EducationalContent} />
                    <Route exact path='/dashboard/scoreboard' component={ScoreBoard} />
                </Switch>
            </div>*/}