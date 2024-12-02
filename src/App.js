import React from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import About from './components/About/About';

import Service from './components/Service/Service';
import HeroSection from './components/HeroSection/HeroSection';

import Contact from './components/Contact/Contact';
import ParticlesComponent from './components/Particles/ParticlesComponent';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="app">
            <NavBar />
            <HeroSection />
            <Service />
            <About />
            <Contact />
            <ParticlesComponent />
            <Footer />
        </div>
    );
}

export default App;
