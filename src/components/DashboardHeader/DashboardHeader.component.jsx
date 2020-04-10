import React from 'react'
import logo from './user (1).png'
import { connect } from 'react-redux'

import './DashboardHeader.styles.css';

import DashboardHeaderLogo from '../dashboard-header-logo/DashboardHeaderLogo.component'

const DashboardHeader = ({ USER }) => (
    <div className='dashboard-header w-100'>
        <span className='w-50'><DashboardHeaderLogo /></span>
        <span className='dashboard-header-profile w-25'>{USER.name} <img src={logo} alt='user' width='25px' /></span>
    </div>
)

const mapStateToProps = state => {
    return {
        USER: state.USER
    }
}

export default connect(mapStateToProps)(DashboardHeader)