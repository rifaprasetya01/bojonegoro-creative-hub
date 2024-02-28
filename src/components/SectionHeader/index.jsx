/* eslint-disable react/prop-types */
import {SwipeAnimation} from '../index';

import style from './style.module.css';

function SectionHeader({subheading, heading, textAlign = 'center'}) {
  return (
    <header
      style={{alignItems: textAlign, textAlign: textAlign}}
      className={`${style['header']}`}>
      <SwipeAnimation>
        <h1 className={`subheading`}>{subheading}</h1>
      </SwipeAnimation>
      <SwipeAnimation>
        <h1 className={`${style['heading']} heading-1`}>{heading}</h1>
      </SwipeAnimation>
    </header>
  );
}

export default SectionHeader;
