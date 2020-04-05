import React, {useState} from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import './Footer.css';

function Footer() {
    const [position, setPosition] = useState(0)

    useScrollPosition(({ prevPos, currPos }) => {
        setPosition(currPos.y);
    })
    return (
        <div className='background px-5'>
            <div className="container fluid">
                <div className="row text-light py-4">
                    <div className="col-lg-4 col-sm-6">
                        <ul className={`list-inline ${position < -2000 && 'moveRight'}`}>
                            <li className="list-inline-item"><i className="fab fa-telegram square fa-2x text-info"></i></li>
                            <li className="list-inline-item"><i className="fab fa-instagram square fa-2x text-danger"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;