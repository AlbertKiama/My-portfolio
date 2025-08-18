import React from 'react';
import { InView } from 'react-intersection-observer';

const AnimateOnScroll = ({ children, animation }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref} className={`animate-box ${inView ? animation : ''}`}>
          {children}
        </div>
      )}
    </InView>
  );
};

export default AnimateOnScroll;
