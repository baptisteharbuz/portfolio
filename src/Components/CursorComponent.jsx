import React, { useEffect } from 'react';
import '../Styles/Style.css'


const Cursor = () => {

  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursor = document.querySelector('.cursor');
  
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
  
////////////DELAY
      setTimeout(() => {
        cursorDot.style.left = `${clientX}px`;
        cursorDot.style.top = `${clientY}px`;
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      }, 70);
    });
  
    document.addEventListener('mouseover', () => {
      cursorDot.style.opacity = 1;
      cursor.style.opacity = 1;
    });
  
    document.addEventListener('mouseout', () => {
      cursorDot.style.opacity = 0;
      cursor.style.opacity = 0;
    });
  }, []);
  
  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor"></div>
    </>
  );
}

export default Cursor;
