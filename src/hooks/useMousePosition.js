import { useState, useEffect, useCallback } from 'react';
import { throttle } from '../utils/helpers';

export const useMousePosition = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const throttledMouseMove = useCallback(
    throttle((e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    }, 50), // Actualiza cada 50ms máximo
    []
  );

  useEffect(() => {
    window.addEventListener('mousemove', throttledMouseMove);
    return () => window.removeEventListener('mousemove', throttledMouseMove);
  }, [throttledMouseMove]);

  return mousePos;
};