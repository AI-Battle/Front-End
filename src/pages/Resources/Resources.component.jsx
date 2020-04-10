import React from 'react';
import { connect } from 'react-redux';

// styled components
import { Background } from '../../styled-components/Background.styles';
import { BigBox } from '../../styled-components/BigBox.styles';
import { Button } from '../../styled-components/Button.styles';
import { Paragraph } from '../../styled-components/Paragraph.styles';
import ContainerHeader from '../../components/ContainerHeader/ContainerHeader.component';
import './Resources.styles.css';

function Resources({Resources}) {
    const renderResources = Resources.map(re => {
        return (
            <li style={{
                listStyle: 'none'
            }}
                className='resource-list'
            >
                <div
                    className='resources-box'
                >
                    <ContainerHeader
                        heading = {re.heading} 
                    />
                    <Paragraph className='mb-1' style={{textAlign: 'start'}}>{re.text}</Paragraph>
                    <div className='d-flex justify-content-start mr-3 buttonContainer'>
                        {re.buttons.map(btn => 
                            <Button className='btn btn-outline-warning mr-3 pb-2 buttons'>
                                <img src={btn.icon} width='30px' />
                                &nbsp;
                                {btn.text}
                            </Button>
                        )}
                    </div>
                </div>
            </li>
        )
    })

    return (
        <div
            className='resources-background'
        >
            {renderResources}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Resources: state.Resources
    }
}

export default connect(mapStateToProps)(Resources);





