"use client"

import React, { useEffect, useState } from 'react';
// import './ParticleButton.css'; // Create a CSS file to style the button and particle effect

const ParticleButton: React.FC = () => {
    const [particles, setParticles] = useState<JSX.Element[]>([]);

    useEffect(() => {
      // Create particles every 0.25 seconds
    //   const particleInterval = setInterval(createParticles, 250);
      const particleInterval = setInterval(createParticles, 500);

      return () => {
        clearInterval(particleInterval);
      };
    }, []);
  
    const createParticles = () => {
      const newParticles: JSX.Element[] = [];
      const particleContainer = document.getElementById('particle-button-container');
  
      if (particleContainer) {
        const { left, top, width, height } = particleContainer.getBoundingClientRect();
        for (let i = 0; i < 1; i++) {
            // const l = Math.random() * width + 'px';
            const t = Math.random() * height + 'px';
            const l = '0px';
          const particleStyle: React.CSSProperties = {
            left: l,
            top: t,
            position: 'relative',
            backgroundColor: getRandomColor(),
          };
          console.log(`new particle at ${l},${t}`);
          newParticles.push(<div key={Date.now() + i} className="particle" style={particleStyle}></div>);
        }
        setParticles((prevParticles) => [...prevParticles, ...newParticles]);
      } else {
        console.log("no particle container");
      }
    };

    const removeParticle = (id: number) => {
      setParticles((prevParticles) => prevParticles.filter((_, index) => index !== id));
    };
    // const [particles, setParticles] = useState<JSX.Element[]>([]);

    // const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     console.log("particle button: handle click");
    //     const { clientX, clientY } = event;
    //     createParticles(clientX, clientY);
    // };

    // const createParticles = (x: number, y: number) => {
    //     console.log(`create particles ${x} ${y}`);
    //     const newParticles: JSX.Element[] = [];
    //     for (let i = 0; i < 10; i++) {
    //         const y =  20 * Math.random();
           
    //         // Create individual particles as <div> elements
    //         const particleStyle: React.CSSProperties = {
    //             left: (10*i) + 'px',
    //             top: y + 'px',
    //             backgroundColor: getRandomColor(),
    //         };
    //         newParticles.push(<div key={i} className="particle" style={particleStyle}></div>);
    //     }
    //     setParticles(newParticles);

    //     // Clear particles after the animation duration
    //     setTimeout(() => {
    //         setParticles([]);
    //     }, 5000);
    // };

    function handleClick(){
        console.log("clicked");
    }

    const getRandomColor = (): string => {
        // Implement your logic to generate random colors
        // For simplicity, you can return a predefined color here
        const colors = ['#ff0000', '#00ff00', '#0000ff'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="">
            <div id="particle-button-container" className="particle-button-container">
                 
                {particles.map((particle, index) => (
                <div key={index} className="particle" onAnimationEnd={() => removeParticle(index)}>
                {particle}
                </div>
            ))}
            </div>
            <button onClick={handleClick} className="particle-button">
                Click Me!
            </button>
        </div>
    );
};

export default ParticleButton;