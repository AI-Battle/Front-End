import React, {useState} from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import logo from '../../images/PicsArt_03-18-01.44.08.png';
import './WhyAI.css';


function WhyAI() {

    const [position, setPosition] = useState(0)

    useScrollPosition(({ prevPos, currPos }) => {
        setPosition(currPos.y);
    })

    return (
        <div className="p-5 mission" id='whyAI'>
            <div className="container-fluid">
                <div className="row text-white text-center">
                    <div className="col m-4">
                        <h1 className={`display-4 mb-4 ${position < -100 && 'moveBottom'}`}>چرا نبرد هوش مصنوعی</h1>
                        <div className="underline mb-4"></div>
                        <p className="lead text-right" dir="rtl">سایت AI Challenges مکان خوبی برای افزاش مهارت کد زنی تیمی و انفرادی در زمینه هوش مصنوعی می باشد که افراد با چالش های جالبی روبرو خواهند شد. در این سایت کد ها به رقابت باهم میپردازند و در نهایت استراتژی بهتر برنده خواهد شد. در این سایت هر دوره چالش ها و مسابقات جدیدی خواهد داشت که این مسابقات جوایز ویژه ای را در بر خواهد داشت.<br />برای شرکت در این مسابقات نیاز به بلد بودن مباحث هوش مصنوعی نمی باشد ولی دانستن این مطالب میتواند کمک بسزایی به افراد بکند. همچنینی اگاهی داشتن به مبانی برنامه نویسی کافی است. همچنین در طی مسابقات دفترچه هایی در زمینه اموزش به شرکت کنندگان اعطا میشود.</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={logo} width='250px' />
            </div>
        </div>
    )
}

export default WhyAI;