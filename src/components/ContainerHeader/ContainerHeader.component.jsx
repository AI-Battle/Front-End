import React from 'react'
import { Link } from 'react-router-dom'
import './ContainerHeader.styled'

// styled components
import { ContainerHeaderBorder } from './ContainerHeader.styled'

function ContainerHeader({heading, buttonText, showButton}) {
    return (
        <ContainerHeaderBorder>
            <h4>{heading}</h4>
            {
                showButton 
                ? 
                <Link to='/dashboard/announcements' className='btn btn-warning text-light'>
                    { buttonText }
                </Link> 
                :
                null
            }
        </ContainerHeaderBorder>
    )
}

export default ContainerHeader;