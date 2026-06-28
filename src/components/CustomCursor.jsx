import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => {
      const target = document.querySelector(':hover');
      if (target) {
        const isInteractive = 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') || 
          target.closest('button');
        setIsHovering(!!isInteractive);
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleHover);

    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleHover);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div 
        className={`${styles.cursor} ${isHovering ? styles.hover : ''}`}
        style={{ left: position.x, top: position.y }}
      />
      <div 
        className={`${styles.cursorDot} ${isHovering ? styles.hover : ''}`}
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
}

export default CustomCursor;