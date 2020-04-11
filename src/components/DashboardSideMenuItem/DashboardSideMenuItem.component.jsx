import React from 'react';
import { NavLink } from 'react-router-dom';

import './DashboardSideMenuItem.styles.css'

const DashboardSideMenuItem = ({ name, icon, className, link }) => {
    return (
        <NavLink exact activeStyle={{backgroundColor: '#ff7f57'}} to={link} className={`dashboard-side-menu-item d-flex py-3 ml-2 ${className}`}>
            <div className='dashboard-sideMenu-item__icon'>
                <img src={icon.image} width='30px' alt='icon' />
            </div>

            <div>
                {name}
            </div>
        </NavLink>
    );
};

export default DashboardSideMenuItem;
