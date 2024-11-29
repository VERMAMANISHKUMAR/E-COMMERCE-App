import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Loader.css';

const Loader = () => {
  const spinning = useSpring({
    loop: { reverse: true },
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 1000 },
  });

  return (
    <div className="loader-container">
      <animated.div style={spinning} className="loader-circle" />
    </div>
  );
};

export default Loader;
