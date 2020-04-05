import React from 'react';

// styled components
import { BigBox } from '../../styled-components/BigBox.styles';

// inner components
import ContainerHeader from '../ContainerHeader/ContainerHeader.component';
import List from '../List/List.component';


function Container(
    {
        backgroundColor, 
        Width, 
        Height, 
        MarginTop, 
        MarginLeft,
        MarginRight, 
        showAnnouncementHeader, 
        showAnnouncementList, 
        showStatisticsList, 
        showStatisticsHeader, 
        showResourcesHeader, 
        showResourcesList, 
        Heading
    }) {
    return (
        <BigBox
            backgroundColor = { backgroundColor }
            Width = { Width }
            Height = { Height }
            MarginTop = { MarginTop }
            MarginLeft = { MarginLeft }
            MarginRight = { MarginRight }
        >
            {showAnnouncementHeader ? 
                <ContainerHeader
                    heading = 'آخرین اعلان ها'
                    showButton = {true}
                    buttonText = 'دیدن همه'
                /> 
                : 
                null 
            }
            {showStatisticsHeader ?
                <ContainerHeader 
                    heading = 'آمار بازی ها'
                    showButton = {false}
                /> 
                :
                null
            }
            {showResourcesHeader ?
                <ContainerHeader
                    heading = {Heading}
                />
                :
                null
            }
            <List
                showAnnouncementList = {showAnnouncementList}
                showStatisticsList = {showStatisticsList} 
                showResourcesList = {showResourcesList}
            />
        </BigBox>
    )
}

export default Container;