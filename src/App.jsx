import React from 'react';
import FooterCopyright from "./components/FooterCopyright.jsx";
import FooterLinks from "./components/FooterLinks.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Market from "./components/Market.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Join from "./components/Join.jsx";
import FooterCaden from "./components/FooterCaden.jsx";


function App(props) {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Market/>
            <WhyUs/>
            <Join/>
            <FooterLinks/>
            <FooterCopyright/>
            <FooterCaden/>
        </div>
    );
}

export default App;