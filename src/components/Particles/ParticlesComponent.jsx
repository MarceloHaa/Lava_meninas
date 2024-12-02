import React from 'react';
import Particles from 'react-tsparticles';
import { loadBubblesPreset } from 'tsparticles-preset-bubbles';

const ParticlesComponent = () => {
    const particlesInit = async (engine) => {
        await loadBubblesPreset(engine);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                preset: 'bubbles',
                background: {
                    color: 'transparent',
                },
                particles: {
                    color: {
                        value: '#62c1e0',
                    },
                    move: {
                        speed: 5,
                    },
                },
            }}
        />
    );
};

export default ParticlesComponent;
