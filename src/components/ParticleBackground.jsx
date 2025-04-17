import React from 'react';
import Particles from 'react-tsparticles';

export const ParticleBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#1a237e", // Deep blue color
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
