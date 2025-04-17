import React from 'react';
import Particles from 'react-tsparticles';

export const ParticleBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
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
          },
          size: {
            value: 1,
          },
          number: {
            value: 100,
          },
        },
      }}
    />
  );
};