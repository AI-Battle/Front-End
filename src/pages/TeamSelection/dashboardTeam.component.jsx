import React, { useState } from 'react';

import './dashboardTeam.styles.css'

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

    return (
        <div className='dashboard-team'>
            {console.log('rendering')}
            <div className='dashboard-team__tabs' >
                <div id="1" className='dashboard-team__tabs__single dashboard-team__tabs__single--active py-2' onClick={handleTab}>

                    <div className='dashboard-team__tabs__single__icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M22.7 11.92a5.7 5.7 0 0 1-.66 7.94c-.7.6-.94 1.1-.5 1.91.08.15.1.34.14.52-.7-.31-1.35-.78-2.04-.85-.69-.07-1.41.32-2.13.4a7.1 7.1 0 0 1-5.76-1.89c-3.07-2.84-2.63-7.2.92-9.52 3.16-2.07 7.8-1.38 10.02 1.49zm-7.41-7.03a6.65 6.65 0 0 1 1.38 3.52c-2.22.11-4.16.79-5.73 2.31a6.81 6.81 0 0 0-2.12 5.78c-.87-.11-1.66-.23-2.46-.3-.28-.02-.6.01-.84.14-.77.44-1.51.93-2.4 1.48.17-.73.27-1.37.46-1.98.13-.45.07-.7-.35-1C.56 12.95-.57 10.13.28 7.22c.78-2.7 2.7-4.33 5.3-5.18a8.89 8.89 0 0 1 9.7 2.85zm-1.63 7.97c-.47 0-.86.4-.84.86a.84.84 0 0 0 1.67 0 .84.84 0 0 0-.83-.86zm5.17 0c-.44 0-.81.35-.83.8-.02.47.35.85.82.85a.8.8 0 0 0 .82-.78.82.82 0 0 0-.81-.87zm-7.06-6.39c-.55.01-1.01.48-1 1.01a1 1 0 0 0 1.03.98c.56 0 1-.44.99-1a1 1 0 0 0-1.02-.99zm-6.34 0a1 1 0 0 0-1.04.97c-.01.56.42 1 .98 1.02.56.01 1.03-.42 1.05-.96a1.03 1.03 0 0 0-.99-1.03z" /></svg>
                    </div>

                    <div className='dashboard-team__tabs__single__title'>
                        تشکیل تیم
                    </div>

                </div>
                <div id="2" className='dashboard-team__tabs__single' onClick={handleTab}>

                    <div className='dashboard-team__tabs__single__icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>

                    <div className='dashboard-team__tabs__single__title'>
                        دعوت‌نامه‌های دریافتی
                    </div>

                </div>

            </div>

            <div className='dashboard-team__body d-flex text-white text-right'>
                {
                    display === '1' ?
                        <div>
                            <div className='dashboard-team__body__alert'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                <span>    ابتدا یک تیم بسازید سپس هم‌تیمی‌هایتان را دعوت کنید.</span>
                            </div>

                            <div className='dashboard-team__body__input'>
                                <label htmlFor="input_1">نام تیم</label>
                                <input id="input_1" type="text" required />
                            </div>

                            <div className='d-flex align-items-center'>
                                <svg style={{ marginLeft: '15px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                                <div className='dashboard-team__body__input dashboard-team__body__input--file w-100'>
                                    <label htmlFor="input_2">آواتار</label>
                                    <input id="input_2" type="file" accept="image/png, image/jpeg" dir='ltr' />
                                </div>
                            </div>
                            <span className='dashboard-team__body__caption'>عکس مربع با حجم حداکثر ۲۰۰ کیلوبایت</span>
                            <div>
                                <button id='btn-1' className='btn'>
                                    <svg style={{ marginLeft: '10px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                    بساز
                                </button>
                            </div>
                        </div>

                        :
                        <div className='dashboard-team__body__invitation'>
                            <div className='dashboard-team__body__invitation__nothing text-center'>
                                هنوز دعوت‌نامه‌ای دریافت نکرده‌اید!
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default DashboardTeam;