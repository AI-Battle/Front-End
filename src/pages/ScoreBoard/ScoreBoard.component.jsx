import React, { useState } from 'react';
import sidbandi from '../../images/rank.png'
import friend1 from '../../images/friend1.png'
import select1 from '../../images/select1.png'
import finishline from '../../images/finish-line.png'

import './ScoreBoard.styles.css'

import ScorePanel from '../../components/ScorePanel/ScorePanel.component'

const DashboardTeam = () => {

    const [display, setDisplay] = useState('1')

    const handleTab = (e) => {
        console.log('run')
        const first = document.querySelector(".dashboard-team__tabs__single--active")

        const target = e.currentTarget
        const id = target.id;
        if (target.classList.contains('dashboard-team__tabs__single--active')) {
            return
        } else {
            first.classList.remove('dashboard-team__tabs__single--active')
            target.classList.add('dashboard-team__tabs__single--active')
            setDisplay(id)
        }

    }

    const renderContent = () => {
        switch(display) {
            case '1':
                return (
                    <ScorePanel 
                        totalTeams = {true}
                        friendTeams = {false}
                    />
                )
            case '2':
                return (
                    <ScorePanel
                        totalTeams = {false}
                        friendTeams = {true}
                    />
                )
            case '3':
                return 3
            default:
                return 4
        }
    }

    return (
        <div className='dashboard-team'>
            {console.log('rendering')}
            <div className='dashboard-team__tabs' >
                <div id="1" className='dashboard-team__tabs__single dashboard-team__tabs__single--active py-2' onClick={handleTab}>

                    <div className='dashboard-team__tabs__single__icon'>
                        <img src={sidbandi} width="24" height="24" viewBox="0 0 24 24" fill="#000" />
                    </div>

                    <div className='dashboard-team__tabs__single__title'>
                        لیگ
                    </div>

                </div>
                <div id="2" className='dashboard-team__tabs__single pt-2' onClick={handleTab}>

                    <div className='dashboard-team__tabs__single__icon'>
                        <img src={friend1} width="24" height="24" viewBox="0 0 24 24" fill="#000" />
                    </div>

                    <div className='dashboard-team__tabs__single__title'>
                        دوستانه
                    </div>

                </div>

            </div>

            <div>
            
                {renderContent()}

            </div>
        </div>
    );
};

export default DashboardTeam;


// {
//     display === '1' ?
//         <div>
//             <div className='dashboard-team__body__alert'>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
//                 <span>    ابتدا یک تیم بسازید سپس هم‌تیمی‌هایتان را دعوت کنید.</span>
//             </div>

//             <div className='dashboard-team__body__input'>
//                 <label htmlFor="input_1">نام تیم</label>
//                 <input id="input_1" type="text" required />
//             </div>

//             <div className='d-flex align-items-center'>
//                 <svg style={{ marginLeft: '15px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
//                 <div className='dashboard-team__body__input dashboard-team__body__input--file w-100'>
//                     <label htmlFor="input_2">آواتار</label>
//                     <input id="input_2" type="file" accept="image/png, image/jpeg" dir='ltr' />
//                 </div>
//             </div>
//             <span className='dashboard-team__body__caption'>عکس مربع با حجم حداکثر ۲۰۰ کیلوبایت</span>
//             <div>
//                 <button id='btn-1' className='btn'>
//                     <svg style={{ marginLeft: '10px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
//                     بساز
//                 </button>
//             </div>
//         </div>

//         :
//         <div className='dashboard-team__body__invitation'>
//             <div className='dashboard-team__body__invitation__nothing text-center'>
//                 هنوز دعوت‌نامه‌ای دریافت نکرده‌اید!
//             </div>
//         </div>
// }