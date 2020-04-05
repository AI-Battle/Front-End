import React from 'react';

// styled components
import { ListBorder, StatisticsBorder, Circle, NumericalsBorder, Num } from './List.styles';

// inner components
import AnnouncementItem from '../AnnouncementItem/AnnouncementItem.component';
import CircleStatistics from '../CircleStatistics/CircleStatistics.component';

// connect function of Redux
import { connect } from 'react-redux';


function List({Announcements, GameStatistics, showAnnouncementList, showStatisticsList}) {

    const renderAnnouncements = Announcements.map(announcement => {
        return (
            <AnnouncementItem
                id={announcement.id} 
                text={announcement.text}
                date={announcement.date}
            />
        )
    })

    const renderGameStatistics = () => {
        return (
            <StatisticsBorder>
                <CircleStatistics />
                <NumericalsBorder>
                    <Num>{GameStatistics.win} برد <img src={GameStatistics.happyFace} width='25px' /></Num>
                    <Num>{GameStatistics.equality} مساوی <img src={GameStatistics.neutralFace} width='25px' /></Num>
                    <Num>{GameStatistics.lose} باخت <img src={GameStatistics.sadFace} width='25px' /></Num>
                </NumericalsBorder>
            </StatisticsBorder> 
        )
    }


    return (
        <ListBorder>
            {showAnnouncementList ? renderAnnouncements : null}
            {showStatisticsList ? renderGameStatistics() : null}
        </ListBorder>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        Announcements: state.Announcements,
        GameStatistics: state.GameStatistics
    }
}

export default connect(mapStateToProps)(List);