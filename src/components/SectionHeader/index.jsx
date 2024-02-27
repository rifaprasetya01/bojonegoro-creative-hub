/* eslint-disable react/prop-types */
import style from './style.module.css';

function SectionHeader({subheading, heading, textAlign = 'center'}) {
  return (
    <header
      style={{alignItems: textAlign, textAlign: textAlign}}
      className={`${style['header']}`}>
      <h1 className={`subheading`}>{subheading}</h1>
      <h1 className={`${style['heading']} heading-1`}>{heading}</h1>
    </header>
  );
}

export default SectionHeader;
