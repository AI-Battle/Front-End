import React from 'react';
import { connect } from 'react-redux';

// styled components
import ContainerHeader from '../../components/ContainerHeader/ContainerHeader.component';
import { Button } from '../../styled-components/Button.styles';
import { Paragraph } from '../../styled-components/Paragraph.styles';
import './EducationalContent.styles.css';

function EducationalContent({ TechnicalEducations, ScientificEducations }) {
    const renderTechnicalEducations = TechnicalEducations.map(re => {
        return (
            <li style={{
                listStyle: 'none'
            }}
                className='list-education'
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'rgb(47, 9, 78)',
                        borderRadius: '1rem'
                    }}
                >
                    <ContainerHeader
                        heading = {re.persianHeading} 
                        subHeading = {re.heading}
                    />
                    <Paragraph style={{textAlign: 'start'}}>{re.text}</Paragraph>
                    <Button 
                        className='btn btn-outline-warning mr-3 pb-2 w-15'
                        style={{alignSelf: 'flex-start'}}
                    >
                        دریافت محتوا
                    </Button>
                </div>
            </li>
        )
    })

    const renderScientificEducations =  ScientificEducations.map(re => {
        return (
            <li style={{
                listStyle: 'none'
            }}
                className='list-education'
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'rgb(47, 9, 78)',
                        borderRadius: '1rem'
                    }}
                >
                    <ContainerHeader
                        heading = {re.persianHeading} 
                        subHeading = {re.heading}
                    />
                    <Paragraph style={{textAlign: 'start'}}>{re.text}</Paragraph>
                    <Button 
                        className='btn btn-outline-warning mr-3 pb-2 w-15'
                        style={{alignSelf: 'flex-start'}}
                    >
                        دریافت محتوا
                    </Button>
                </div>
            </li>
        )
    })
    
    return (
        <div
            className = 'education-background'
        >
            {renderTechnicalEducations}
            {renderScientificEducations}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        TechnicalEducations: state.TechnicalEducations,
        ScientificEducations: state.ScientificEducations
    }
}

export default connect(mapStateToProps)(EducationalContent);