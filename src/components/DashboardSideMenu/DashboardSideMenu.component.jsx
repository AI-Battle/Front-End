import React from 'react'
import { connect } from 'react-redux'

import './DashboardSideMenu.styles.css'
import DashboardSideMenuItem from '../DashboardSideMenuItem/DashboardSideMenuItem.component'

class DashboardSideMenu extends React.Component {

    render() {
        return (
            <div id='hamberger' className='dashboard-side-menu--container header_dropdown-menu collapse col-xl-2 col-lg-3 col-12 d-lg-block px-0'>
                <nav className='dashboard-side-menu py-5'>
                    {
                        this.props.MENU_ITEMS.map(item => {
                            return (
                                <DashboardSideMenuItem
                                    name={item.name}
                                    icon={item.icon}
                                    id={item.id}
                                    link={item.link}
                                    active={item.active} 
                                />
                            )
                        })
                    }
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        MENU_ITEMS: state.MENU_ITEMS
    }
}

export default connect(mapStateToProps)(DashboardSideMenu)