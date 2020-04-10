import React from 'react';

// styled components
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
                className='rules-box'
            >
                <SmallBox key={rule.id}
                    style={{color: '#ccc', fontSize: '90%'}}
                >
                    <div style={{
                        display: 'flex'
                    }}>
                        <span 
                        style={{
                            width: '10px', 
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#ff5722',
                            position: 'absolute',
                            marginTop: '.2rem'
                        }}>
                        </span>
                        <span
                            style={{
                                marginRight: '1.5rem'
                            }}
                        >
                            {rule.text}
                        </span>
                    </div>
                </SmallBox>
            </ul> 
        )
    })

    return (
        <div
            className='rules-background'
        >     
            {renderRules}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Rules: state.Rules
    }
}

export default connect(mapStateToProps)(Rules);