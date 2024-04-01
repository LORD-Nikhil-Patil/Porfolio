import React, { useEffect } from 'react';


const Space = () => {

    useEffect(() => {
        const parent = document.getElementById('parent');
        const parentWidth = parent.offsetWidth;
        const parentHeight = parent.offsetHeight;
    
        // Create stars dynamically within specified range
        for (let i = 0; i < 50; i++) {
          createStar(parent, parentWidth, parentHeight);
        }
      }, []);

      const createStar = (parent, parentWidth, parentHeight) => {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * parentHeight}px`;
        star.style.left = `${Math.random() * parentWidth}px`;
        star.style.animationDuration = `${Math.random() * 10 + 10}s`; // Randomize animation duration
        parent.appendChild(star);
      };

     return null;
}

export default Space;