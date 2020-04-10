import React, {useState} from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import './Prizes.css';


function Prizes() {

    const [position, setPosition] = useState(0)

    useScrollPosition(({ prevPos, currPos }) => {
        setPosition(currPos.y);
    })

    return (
        <div className="p-5 mission" id='prizes' dir="rtl">
            <div className="container-fluid">
                <div className="row text-white text-center">
                    <div className="col m-4">
                        <h1 className={`display-4 mb-4 ${position < -650 && 'moveBottom'}`}>جوایز</h1>
                        <div className="underline mb-4"></div>
                        <p className='lead'>هر دوره چالش هایی در قالب تورنومنت برگزار خواهد شد که جوایزی اعم از وجه نقد و تندیس و تیشرت و ... خواهد داشت.</p>
                    </div>
                </div>
                
                <div className="row my-5">
                    <div className={`col-md-4 text-center ${position < -400 && 'zoomIn'}`}>
                        
                    </div>
                    <div className={`col-md-4 text-center ${position < -400 && 'zoomIn'}`}>
                        
                    </div>
                    <div className={`col-md-4 text-center ${position < -400 && 'zoomIn'}`}>
                        
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className={`col-lg-7 text-white text-lg-right text-center ${position < -800 && 'moveLeft'}`}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prizes;