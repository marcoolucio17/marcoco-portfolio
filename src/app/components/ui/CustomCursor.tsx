// components/CustomCursor.js
"use client";

import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {


      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      
      if (target.matches('a, a *')) {
        setCursorState('link');
      } else if (target.matches('button, [role="button"], input[type="submit"], input[type="button"], .clickable, button *')) {
        setCursorState('hover');
      } else if (target.matches('input, textarea, [contenteditable], input *, textarea *')) {
        setCursorState('text');
      } else {
        setCursorState('');
      }
    };

    const handleMouseDown = () => {
      console.log('Click detected!'); // Debug log
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      // Remove clicked state after a delay to see the animation
      setTimeout(() => {
        setIsClicked(false);
      }, 500);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  console.log('Cursor state:', cursorState, 'Clicked:', isClicked); // Debug log

  return (
    <div
      className={`custom-cursor ${cursorState} ${isClicked ? 'clicked' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    />
  );
}