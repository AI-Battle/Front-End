import happy from '../../images/emoji.png'
import neutral from '../../images/emoji1.png'
import sad from '../../images/sad.png'

const Statistics = {
    id: 1,
    teamName: 'MyTeam',
    win: '۳۳',
    lose: '۲۰',
    equality: '۲۰', 
    winPercentage: '60%',
    equalityPercentage: '10%',
    losePercentage: '30%',
    happyFace: happy,
    sadFace: sad,
    neutralFace: neutral
}


export const GameStatisticsReducer = (state = Statistics, action) => {
    return state
}