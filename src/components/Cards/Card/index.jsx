/* eslint-disable react/prop-types */
import {motion} from 'framer-motion';

import style from './style.module.css';

const variants = {
  initial: {
    y: 0,
  },
  hover: {
    y: '-100%',
  },
};
function Card({icon, subheading, heading, background}) {
  return (
    <motion.div
      initial={'initial'}
      whileHover={'hover'}
      className={`${style['card']}`}>
      <motion.div variants={variants} className={`${style['card-thumbnail']}`}>
        <i className={`${style['card-icon']}`}>{icon}</i>
        <h1 className={`${style['card-subheading']} text-body text-md`}>
          {subheading}
        </h1>
        <h2 className={`${style['card-heading']} heading-2 text-xl`}>
          {heading}
        </h2>
      </motion.div>
      <img
        className={`${style['card-background']}`}
        src={background}
        alt="background card"
      />
      <div className={`${style['card-body']}`}>
        <h1 className={`${style['card-subheading']} text-body text-base`}>
          {subheading}
        </h1>
        <h2 className={`${style['card-heading']} heading-2 text-xl`}>
          {heading}
        </h2>
        <p className={`${style['card-text']} text-body`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          libero recusandae. Ex at, numquam esse odit placeat exercitationem sed
          hic voluptate autem, harum unde quaerat provident rerum eligendi culpa
          ipsam.
        </p>
      </div>
    </motion.div>
  );
}

export default Card;
