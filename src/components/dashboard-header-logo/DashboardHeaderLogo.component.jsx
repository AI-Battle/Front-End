import React from 'react'

import './DashboardHeaderLogo.styles.css'

const DashboardHeaderLogo = () => (
    <div className='dashboard-header-logo col-xl-2 col-lg-3 col-sm-4 col-8 align-items-center'>
        <div class="header__top__burger-btn d-xl-none mr-3  ">
            <button data-toggle="collapse" data-target="#hamberger" class="btn collapsed" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>
)

export default DashboardHeaderLogo