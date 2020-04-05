import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
    <header>
        <Navbar
            section1={<div><i class="fas fa-users ml-1"></i>درباره ما</div>}
            section2={<div><i class="fas fa-question ml-1"></i>چرا نبرد هوش مصنوعی</div>} 
            section3={<div><i class="fas fa-award ml-1"></i>جوایز</div>}
            section4={<div><i class="far fa-money-bill-alt ml-1"></i>اسپانسرینگ</div>}
            section6={<div><i className="fas fa-sign-in-alt ml-1"></i>ورود</div>}
            section7={<div><i className="fas fa-user-plus ml-1"></i>ثبت نام</div>}
            link1='aboutus'
            link2='whyAI'
            link3='prizes'
            link4='sponsers'
            link5='signin'
            link6='signup'
        />
        <div className="text-light text-md-right text-center banner" dir="rtl">
            <h1 className="display-4 banner-heading">AI Challenges چیست؟</h1>
            <p className="lead banner-par">نوبت این رسیده است که میدان را به کد ها بدهید. بگذارید کد ها بجنگند. چالش های برنامه نویسی با چاشنی هوش مصنوعی</p>
        </div>
    </header>
    )
}

export default Header;