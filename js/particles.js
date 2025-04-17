document.addEventListener("DOMContentLoaded", async function() {
    await tsParticles.load("tsparticles", {
        fpsLimit: 60,
        background: {
            color: "#ffffff"
        },
        particles: {
            color: {
                value: "#0077b6"
            },
            links: {
                color: "#0077b6",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
            },
            collisions: {
                enable: true
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "bounce"
                }
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 80
            },
            opacity: {
                value: 0.5
            },
            shape: {
                type: "circle"
            },
            size: {
                value: { min: 1, max: 5 }
            }
        },
        detectRetina: true,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    links: {
                        opacity: 1
                    }
                }
            }
        }
    });
});