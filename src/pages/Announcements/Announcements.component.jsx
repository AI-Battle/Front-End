import React from 'react';

// styled components
import { SmallBox } from '../../styled-components/SmallBox.styles';
import './Announcements.styles.css';

// connect function of react-redux
import { connect } from 'react-redux';

function Announcements({Announcements}) {

    const renderAnnouncements = Announcements.map(announcement => {
        return (
            <ul
                style={{
                    listStyle: 'none',
                    textAlign: 'end'
                }}
                className='announcements-box'
            >
                <SmallBox key={announcement.id}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                >
                    <span>{announcement.text}</span>
                    <span style={{alignSelf: 'flex-end', color: '#ccc', fontSize: '80%'}}>{announcement.date}</span>
                </SmallBox>
            </ul> 
        )
    })
    
    return (
        <div
            className='announcements-background'
        >
            {renderAnnouncements}
        </div>
    )

}

const mapStateToProps = state => {
    console.log(state)
    return {
        Announcements: state.Announcements
    }
}

export default connect(mapStateToProps)(Announcements);