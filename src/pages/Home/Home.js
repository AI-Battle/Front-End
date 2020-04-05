import React from 'react';
import Header from '../../components/Header/Header';
import WhyAI from '../../components/WhyAI/WhyAI';
import Prizes from '../../components/Prizes/Prizes';
import AboutUs from '../../components/AboutUs/AboutUs';
import Sponsers from '../../components/Sponsers/Sponsers';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
        <div>
            <Header />
            <WhyAI />
            <Prizes />
            <AboutUs />
            <Sponsers />
            <Footer />
        </div>
    )
}

export default Home;