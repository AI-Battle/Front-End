import React from 'react';

// styled components
import { Background } from '../../styled-components/Background.styles';
import { BigBox } from '../../styled-components/BigBox.styles';
import { SmallBox } from '../../styled-components/SmallBox.styles';
import './Rules.styles.css';

// connect function of react-redux
import { connect } from 'react-redux';

function Rules({ Rules }) {

    const renderRules = Rules.map(rule => {
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
            Height = '10vh'
        > 
            <BigBox
                Width = '80%'
                Height = '80%'
                backgroundColor = 'rgb(45, 10, 79)'
                MarginTop = '2%'
                MarginLeft = '2%'
                MarginRight = '18%'
                PaddingRight = '1%' 
                PaddingTop = '1%'
                className='rules-box'
            >
                
                {renderRules}
            </BigBox>
        </Background>
    )
}

const mapStateToProps = state => {
    return {
        Rules: state.Rules
    }
}

export default connect(mapStateToProps)(Rules);