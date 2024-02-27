/* eslint-disable react/prop-types */
import {useRef, useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FaBars, FaX} from 'react-icons/fa6';
import {motion} from 'framer-motion';

import {useInDekstop} from '../../hooks';

import bchLogo from '../../assets/images/bch-logo.png';

import style from './style.module.css';

function Navbar() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <nav className={`${style['navbar']}`}>
      <button
        onClick={() => setSidebarIsOpen((prevValue) => !prevValue)}
        className={`${style['trigger-btn']}`}>
        {sidebarIsOpen ? <FaX /> : <FaBars />}
      </button>

      <Link href={'/'} className={`${style['brand']}`}>
        <img
          src={bchLogo}
          alt="Bojonegoro Creative Hub Logo"
          className={`${style['brand-logo']}`}
        />
        <div className={`${style['brand-text']}`}>
          <h1 className={`${style['brand-name']}`}>BCH</h1>
          <h2 className={`${style['brand-vision']}`}>
            Creative Culture Ambience
          </h2>
        </div>
      </Link>

      <main
        className={`${style['links']} ${
          sidebarIsOpen ? style['isOpen'] : ''
        } `}>
        <Navigate
          inAnimationDelay={'0'}
          sidebarStatus={sidebarIsOpen}
          outAnimationDelay={'0.5'}
          to={'/'}>
          Home
        </Navigate>
        <Navigate
          inAnimationDelay={'0.1'}
          outAnimationDelay={'0.4'}
          sidebarStatus={sidebarIsOpen}
          to={'/about'}>
          About
        </Navigate>
        <Navigate
          inAnimationDelay={'0.2'}
          outAnimationDelay={'0.3'}
          sidebarStatus={sidebarIsOpen}
          to={'/facility'}>
          Facility
        </Navigate>
        <Navigate
          inAnimationDelay={'0.3'}
          outAnimationDelay={'0.2'}
          sidebarStatus={sidebarIsOpen}
          to={'/news'}>
          News
        </Navigate>
        <Navigate
          inAnimationDelay={'0.4'}
          outAnimationDelay={'0.1'}
          sidebarStatus={sidebarIsOpen}
          to={'/prepetrator'}>
          Prepetrator
        </Navigate>
        <Navigate
          inAnimationDelay={'0.5'}
          outAnimationDelay={'0'}
          sidebarStatus={sidebarIsOpen}
          to={'/spread'}>
          Spread
        </Navigate>
        <Navigate
          inAnimationDelay={'0.6'}
          outAnimationDelay={''}
          sidebarStatus={sidebarIsOpen}
          to={'/contact'}>
          Contact
        </Navigate>
      </main>
    </nav>
  );
}

export default Navbar;

const Navigate = ({
  children,
  to,
  sidebarStatus,
  inAnimationDelay,
  outAnimationDelay,
}) => {
  const ref = useRef(null);

  const inDekstop = useInDekstop();

  const variant = inDekstop
    ? ''
    : {
        init: {
          x: '-100%',
        },
        animate: {
          x: '0%',
        },
      };

  return (
    <NavLink to={to} className={`${style['link']}`}>
      <motion.div
        variants={variant}
        animate={sidebarStatus ? 'animate' : 'init'}
        transition={
          sidebarStatus
            ? {delay: inAnimationDelay, duration: 0.3, type: 'spring'}
            : {delay: outAnimationDelay, duration: 0.3}
        }
        ref={ref}>
        {children}
      </motion.div>
    </NavLink>
  );
};
