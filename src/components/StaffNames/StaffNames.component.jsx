import React from 'react'

import './StaffNames.styles.css'

const StaffNames = ({ name, role, link, img }) => (
    <div className='staff-names mx-2 mx-md-3'>
        <div className='staff-names__single'>
            <a href={link}>
                <img src={img} className='staff-names__single__img' alt="" />
            </a>
        </div>
        <div className='staff-names__single__name'>{name}</div>
        <div className='staff-names__single__role'>{role}</div>
    </div>
)

export default StaffNames