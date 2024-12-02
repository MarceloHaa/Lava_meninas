import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HeroSection.css';

import heroImage from '../../img/servicos.jpg';

function HeroSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    return (
        <div>
            <header
                className="hero-section"
                data-aos="flip-up"
                data-aos-duration="1200"
                data-aos-offset="50"
            >
                <img src={heroImage} alt="Lava Rápido" className="hero-image" />
            </header>
        </div>
    );
}

export default HeroSection;
