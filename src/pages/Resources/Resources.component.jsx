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
        console.log(re)
        return (
            <li style={{
                marginBottom: '13%'
            }}
                className='list'
            >
                <BigBox
                    Width = '77%'
                    Height = '30%'
                    backgroundColor = 'rgb(45, 10, 79)'
                    MarginTop = '2%'
                    MarginRight = '20%'
                    className='resources-box'
                >
                    <ContainerHeader
                        heading = {re.heading} 
                    />
                    <Paragraph className='mb-2' style={{textAlign: 'start'}}>{re.text}</Paragraph>
                    <div className='d-flex justify-content-start mr-3'>
                        {re.buttons.map(btn => 
                            <Button className='btn btn-outline-warning mr-3 pb-2'>
                                <img src={btn.icon} width='30px' />
                                &nbsp;
                                {btn.text}
                            </Button>
                        )}
                    </div>
                </BigBox>
            </li>
        )
    })

    return (
        <Background
            Height = '120vh'
        >
            {renderResources}
        </Background>
    )
}

const mapStateToProps = state => {
    return {
        Resources: state.Resources
    }
}

export default connect(mapStateToProps)(Resources);





