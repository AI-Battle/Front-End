import React from 'react'
import { Link } from 'react-router-dom'
import './ContainerHeader.styled'

// styled components
import { ContainerHeaderBorder } from './ContainerHeader.styled'

function ContainerHeader({heading, buttonText, showButton, subHeading}) {
    return (
        <ContainerHeaderBorder>
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <h4>{heading}</h4>
                <span style={{color: '#ccc', marginRight: '1rem', marginBottom: '.5rem'}}>{subHeading}</span>
            </div>
            {
                showButton 
                ? 
                <Link to='/challengeschallenges/challenge1/announcements' className='btn btn-warning text-light'>
                    { buttonText }
                </Link> 
                :
                null
            }
        </ContainerHeaderBorder>
    )
}

export default ContainerHeader;