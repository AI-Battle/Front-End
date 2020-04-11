import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import useToggleState from '../../hooks/useToggleState';
import logo from '../../PicsArt_03-18-01.44.08.png';

function Navbar(props) {
    const [position, setPosition] = useState(0);
    const [navLine, setNavLine] = useToggleState(false);

    useScrollPosition(({ prevPos, currPos }) => {
        setPosition(currPos.y);
    })
    return (
        <nav class={`navbar navbar-expand-lg fixed-top nav-menu ${position < -600 && 'custom-navbar'}`}>
            <img src={logo} width='50' height='50' className='mr-3' alt='logo' />
            <RouterLink to='/' className="navbar-brand text-light navbar_brand">AI Battles</RouterLink>
            <button class="navbar-toggler nav-button" type="button" data-toggle="collapse" data-target="#myNavbar" onClick={setNavLine}>
                <div class={`bg-light line1 ${navLine ? 'changeLine1' : ''}`}></div>
                <div class={`bg-light line2 ${navLine ? 'changeLine2' : ''}`}></div>
                <div class={`bg-light line3 ${navLine ? 'changeLine3' : ''}`}></div>
            </button>
            <div class="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold" id="myNavbar">
                <div class="navbar-nav w-100 d-flex justify-content-between">
                    <div className='d-flex mr-5 align-items-center'>
                        <li class="nav-item rightNavLinks" style={{cursor: 'pointer'}}>
                            <Link
                                className="nav-link m2"
                                activeClass="active"
                                to={props.link1}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {700}
                            >
                                {props.section1}
                            </Link>
                        </li>
                        <li class="nav-item ml-2 rightNavLinks" style={{cursor: 'pointer'}}>
                            <Link
                                className="nav-link m2"
                                activeClass="active"
                                to={props.link2}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {700}
                            >
                                {props.section2}
                            </Link>
                        </li>
                        <li class="nav-item ml-2 rightNavLinks" style={{cursor: 'pointer'}}>
                            <Link
                                className="nav-link m2"
                                activeClass="active"
                                to={props.link3}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {700}
                            >
                                {props.section3}
                            </Link>
                        </li>
                        <li class="nav-item ml-2 rightNavLinks" style={{cursor: 'pointer'}}>
                            <Link
                                className="nav-link m2"
                                activeClass="active"
                                to={props.link4}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {700}
                            >
                               {props.section4}
                            </Link>
                        </li>
                    </div>
                    <div className='d-flex ml-5 align-items-center'>
                        <li class="nav-item text-white">
                            <RouterLink to={props.link5} className="nav-link m2 menu-item">{props.section6}</RouterLink>
                        </li>
                        <li class="nav-item ml-2">
                            <RouterLink to={props.link6} className="nav-link m2 menu-item">{props.section7}</RouterLink>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;