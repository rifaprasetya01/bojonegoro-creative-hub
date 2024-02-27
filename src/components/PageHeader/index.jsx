/* eslint-disable react/prop-types */
import background from '../../assets/images/bch-building.jpeg';

import style from './style.module.css';

function PageHeader({text}) {
  return (
    <header className={`${style['page-header']}`}>
      <img
        src={background}
        alt="Bojonegoro Creative Hub Building Photo"
        className={`${style['background-header']}`}
      />
      <h1 className={`${style['heading']} heading-2 section`}>{text}</h1>
    </header>
  );
}

export default PageHeader;
