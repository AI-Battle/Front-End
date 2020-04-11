import home from '../../images/home-run.png'
import education from '../../images/presentation.png'
import speaker from '../../images/speaker.png'
import resources from '../../images/clipboard.png'
import error from '../../images/error.png'
import tournament from '../../images/tournament.png'
import rank from '../../images/rank.png'
import worker from '../../images/worker.png'
import send from '../../images/send.png'
import sony from '../../images/sony.png'

const MENU_ITEMS = [
    {
        id: 1,
        name: 'خانه',
        active: true,
        link: '/challengeschallenges/challenge1',
        icon: {image: home}
    },
    {
        id: 2,
        name: 'قوانین',
        active: true,
        link: '/challengeschallenges/challenge1/rules',
        icon: {image: error}
    },
    {
        id: 3,
        name: 'اعلان‌ها',
        active: true,
        link: '/challengeschallenges/challenge1/announcements',
        icon: {image: speaker}
    },
    {
        id: 4,
        name: 'منابع',
        active: true,
        link: '/challengeschallenges/challenge1/resources',
        icon: {image: resources}
    },
    {
        id: 5,
        name: 'محتوای آموزشی',
        active: false,
        icon: {image: education},
        link: '/challengeschallenges/challenge1/educationalcontent'
    },
    {
        id: 6,
        name: 'تورنومنت ها',
        active: false,
        icon: {image: tournament},
        link: '/challengeschallenges/challenge1/tournament'
    },
    {
        id: 7,
        name: 'جدول امتیازات',
        active: false,
        icon: {image: rank},
        link: '/challengeschallenges/challenge1/scoreboard'
    },
    {
        id: 8,
        name: 'تیم',
        active: false,
        icon: {image: worker},
        link: '/challengeschallenges/challenge1/teamselection'
    },
    {
        id: 9,
        name: 'ارسال کد',
        active: false,
        icon: {image: send},
        link: '/challengeschallenges/challenge1/codesend'
    },
    {
        id: 10,
        name: 'بازی ها',
        active: false,
        icon: {image: sony},
        link: ''
    },
]

export const DashboardMenuItemsReducer = (state = MENU_ITEMS, action) => {
    return state
}