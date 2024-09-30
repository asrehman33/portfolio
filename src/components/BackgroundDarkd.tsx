import React, { useEffect } from 'react';
import './css/Background.css';

const Background: React.FC = () => {
    useEffect(() => {
        const linesContainer = document.querySelector('.lines');
        const cursor = document.querySelector('.custom-cursor') as HTMLElement;

        const createLine = () => {
            const line = document.createElement('div');
            line.className = 'line';

            const randomX = Math.random() * 100; // Positionnement horizontal aléatoire (entre 0% et 100%)
            const randomY = Math.random() * 100; // Positionnement vertical aléatoire (entre 0% et 100%)
            const randomRotation = Math.random() * 360; // Rotation aléatoire
            const randomDuration = Math.random() * 5 + 10; // Durée d'animation aléatoire (entre 10 et 15 secondes)

            // Positionner la ligne à des coordonnées aléatoires
            line.style.left = `${randomX-6}%`; 
            line.style.top = `${randomY-6}%`;
            line.style.transform = `rotate(${randomRotation}deg)`; // Appliquer une rotation aléatoire
            line.style.animationDuration = `${randomDuration}s`; // Appliquer une durée d'animation aléatoire

            linesContainer?.appendChild(line);
        };

        // Créer 20 lignes aléatoires
        for (let i = 0; i < 20; i++) {
            createLine();
        }

        const moveCursor = (e: MouseEvent) => {
            cursor.style.top = `${e.clientY}px`;
            cursor.style.left = `${e.clientX}px`;
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div>
            <div className="lines"></div>
            <div className="custom-cursor"></div>
            <div className="background"></div>
        </div>
    );
}

export default Background;