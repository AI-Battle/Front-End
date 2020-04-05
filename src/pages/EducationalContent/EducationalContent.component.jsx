import React from 'react';
import { connect } from 'react-redux';

// styled components
import { Background } from '../../styled-components/Background.styles';
import { BigBox } from '../../styled-components/BigBox.styles';
import ContainerHeader from '../../components/ContainerHeader/ContainerHeader.component';
import { Button } from '../../styled-components/Button.styles';
import { Paragraph } from '../../styled-components/Paragraph.styles';
import './EducationalContent.styles.css';

function EducationalContent({ TechnicalEducations, ScientificEducations }) {
    const renderTechnicalEducations = TechnicalEducations.map(re => {
        return (
            <li style={{
                marginBottom: '13%'
            }}
                className='list'
            >
                <BigBox
                    Width = '77%'
                    Height = '28%'
                    backgroundColor = 'rgb(45, 10, 79)'
                    MarginTop = '2%'
                    MarginRight = '20%'
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    className = 'educational-content'
                >
                    <ContainerHeader
                        heading = {re.heading} 
                    />
                    <Paragraph>{re.text}</Paragraph>
                    <Button 
                        className='btn btn-outline-warning mr-3 pb-2 w-15'
                        style={{alignSelf: 'flex-start'}}
                    >
                        دریافت محتوا
                    </Button>
                </BigBox>
            </li>
        )
    })

    const renderScientificEducations =  ScientificEducations.map(re => {
        return (
            <li style={{
                marginBottom: '13%'
            }}>
                <BigBox
                    Width = '77%'
                    Height = '28%'
                    backgroundColor = 'rgb(45, 10, 79)'
                    MarginTop = '2%'
                    MarginRight = '20%'
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    className = 'educational-content'
                >
                    <ContainerHeader
                        heading = {re.heading} 
                    />
                    <Paragraph>{re.text}</Paragraph>
                    <Button 
                        className='btn btn-outline-warning mr-3 pb-2 w-15'
                        style={{alignSelf: 'flex-start'}}
                    >
                        دریافت محتوا
                    </Button>
                </BigBox>
            </li>
        )
    })
    
    return (
        <Background
            Height = '220vh'
            
        >
            {renderTechnicalEducations}
            {renderScientificEducations}
        </Background>
    )
}

const mapStateToProps = state => {
    return {
        TechnicalEducations: state.TechnicalEducations,
        ScientificEducations: state.ScientificEducations
    }
}

export default connect(mapStateToProps)(EducationalContent);