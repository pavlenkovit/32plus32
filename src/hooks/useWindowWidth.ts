import { useEffect, useState } from 'react';

function useWindowWidth(): number {
  let initialWidth = 0;
  try {
    if (window) {
      initialWidth = window.innerWidth;
    }
  } catch {
    console.error('window not defined');
  }

  const [windowWidth, setWindowWidth] = useState(initialWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (windowWidth === 0) {
      updateWindowWidth();
    }

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return windowWidth;
}

export default useWindowWidth;
