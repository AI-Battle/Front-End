import React from 'react';

// inner components
import ContainerHeader from '../ContainerHeader/ContainerHeader.component';
import List from '../List/List.component';


function Container(
    { 
        showAnnouncementHeader, 
        showAnnouncementList, 
        showStatisticsList, 
        showStatisticsHeader, 
        showResourcesHeader, 
        showResourcesList, 
        Heading
    }) {
    return (
        <div
            style={{
                backgroundColor: 'rgb(47, 9, 78)',
                width: '30rem',
                height: '23rem',
                overflow: 'hidden',
                margin: '2rem',
                borderRadius: '1rem'
            }}
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
        </div>
    )
}

export default Container;