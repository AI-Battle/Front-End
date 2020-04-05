import React from 'react'
import logo from './user (1).png'
import { connect } from 'react-redux'

import './DashboardHeader.styles.css';

const DashboardHeader = ({ USER }) => (
    <div className='dashboard-header w-25'>
        {USER.name} <img src={logo} alt='user' width='25px' />
    </div>
)

const mapStateToProps = state => {
    return {
        USER: state.USER
    }
}

export default connect(mapStateToProps)(DashboardHeader)