import React, {useState} from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import photo1 from '../../images/8dHhS1qcsE6AAAAAElFTkSuQmCC.png';
import './Sponsers.css';


function Sponsers() {

    const [position, setPosition] = useState(0)

    useScrollPosition(({ prevPos, currPos }) => {
        setPosition(currPos.y);
    })

    return (
        <div className="p-5 mission" id='sponsers' dir="rtl">
            <div className="container-fluid">
                <div className="row text-white text-center">
                    <div className="col m-4">
                        <h1 className={`display-4 mb-4 ${position < -1700 && 'moveBottom'}`}>اسپانسرینگ</h1>
                        <div className="underline mb-4"></div>
                    </div>
                </div>
                
                <div className="row my-5 d-flex justify-content-center">
                    <div className={`col-md-4 text-center ${position < -1800 && 'zoomIn'}`}>
                        <img src={photo1} alt='sponser1' className='rounded' style={{width: '15rem'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsers;