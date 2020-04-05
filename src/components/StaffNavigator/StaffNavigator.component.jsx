import React from 'react'

import './StaffNavigator.styles.css'

export default function StaffNavigator({ name, className, id }) {

    return (
        <div className={`staff-navigator ${className}`} id={id}>
            {name}
        </div >
    )

}
