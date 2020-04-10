import React, {useState} from 'react';
import { connect } from 'react-redux';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link } from 'react-router-dom';
import './AboutUs.css';

import PopupWindow from '../PopupWindow/PopupWindow.component'

function AboutUs({ SomeStuff }) {

    const [position, setPosition] = useState(0)

    useScrollPosition(({ prevPos, currPos }) => {
        setPosition(currPos.y);
    })

    const renderSomeStuff = SomeStuff.map(person => {
        return (
            <div className='d-flex flex-column w-100 align-items-center singleStuff'>
                <PopupWindow person={person} />
            </div>
        )
    })

    return (
        <div className='p-5 about-us' id='aboutus'>
            <div className="container-fluid d-flex flex-column">
                
                <div className="row text-white text-center d-flex justify-content-center">
                    <div className="col-m4">
                        <h1 className={`display-4 mb-4 text-center ${position < -1000 && 'moveBottom'}`}>در باره ما</h1>
                        <div className="underline mb-4"></div>
                        <p className="lead">برخی از اعضای تیم</p>
                    </div>
                </div>
                
                <div className='d-flex justify-content-center'>
                    {renderSomeStuff}
                </div>
                
                <Link to='/staff' className='btn bg-warning mt-5 w-25' style={{marginRight: '37%'}}>دیدن همه</Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        SomeStuff: state.SomeStuff
    }
}

export default connect(mapStateToProps)(AboutUs);

