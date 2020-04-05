import React from 'react'

import StaffList from '../../components/StaffList/StaffList.component'
import StaffHeader from '../../components/StaffHeader/StaffHeader.component'
import Footer from '../../components/Footer/Footer'
import './Staff.styles.css'


const Staff = () => (
    <div className='staff-page'>
        <StaffHeader />
        <StaffList />
        <Footer />
    </div>
)

export default Staff