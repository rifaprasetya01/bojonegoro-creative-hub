/* eslint-disable react/prop-types */
import {useRef} from 'react';
import {motion, useInView} from 'framer-motion';

import style from './style.module.css';

function SwipeAnimation({children}) {
  const swipeRef = useRef(null);
  const swipeInView = useInView(swipeRef, {once: true});

  return (
    <motion.div
      ref={swipeRef}
      variants={containerVariantAnimation}
      animate={swipeInView ? 'inview' : 'initial'}
      transition={{duration: 0.3}}
      className={`${style['swipe-animation']}`}>
      <motion.div
        variants={curtainVariantAnimation}
        animate={swipeInView ? 'inview' : 'initial'}
        transition={{duration: 0.3, delay: 0.3}}
        className={`${style['swipe-curtain']}`}></motion.div>
      <div className={`${style['swipe-content']}`}>{children}</div>
    </motion.div>
  );
}

export default SwipeAnimation;

const containerVariantAnimation = {
  initial: {
    scaleX: 0,
  },
  inview: {
    scaleX: 1,
  },
};

const curtainVariantAnimation = {
  initial: {
    scaleX: 1,
  },
  inview: {
    scaleX: 0,
  },
};
