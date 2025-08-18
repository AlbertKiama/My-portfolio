import React from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

type AnimateOnScrollProps = {
  children: React.ReactNode;
  animation?: 'fadeInLeft' | 'fadeInRight' | 'fadeInTop' | 'fadeInBottom' | string;
};

const variantsMap: Record<string, any> = {
  fadeInLeft: { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
  fadeInRight: { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } },
  fadeInTop: { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } },
  fadeInBottom: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
};

const AnimateOnScroll = ({ children, animation = 'fadeInBottom' }: AnimateOnScrollProps) => {
  const variants = variantsMap[animation] ?? variantsMap.fadeInBottom;
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
};

export default AnimateOnScroll;
