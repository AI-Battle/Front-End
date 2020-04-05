import React from 'react';

// styled components
import { Background } from '../../styled-components/Background.styles';
import { BigBox } from '../../styled-components/BigBox.styles';
import { SmallBox } from '../../styled-components/SmallBox.styles';
import './Announcements.styles.css';

// connect function of react-redux
import { connect } from 'react-redux';

function Announcements({Announcements}) {

    const renderAnnouncements = Announcements.map(rule => {
        return (
            <ul
                style={{
                    listStyle: 'none',
                    textAlign: 'end'
                }}
            >
                <SmallBox key={rule.id}>
                    {rule.text}
                </SmallBox>
            </ul> 
        )
    })
    
    return (
        <Background
            Height = '100vh'
        >
            <BigBox
                Width = '80%'
                Height = '80%'
                backgroundColor = 'rgb(45, 10, 79)'
                MarginTop = '2%'
                MarginRight = '18%'
                PaddingRight = '1%' 
                PaddingTop = '1%'
                className = 'announcements-box'
            >
                {renderAnnouncements}
            </BigBox>
        </Background>
    )

}

const mapStateToProps = state => {
    console.log(state)
    return {
        Announcements: state.Announcements
    }
}

export default connect(mapStateToProps)(Announcements);