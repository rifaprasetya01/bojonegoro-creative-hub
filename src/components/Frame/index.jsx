/* eslint-disable react/prop-types */
import style from './style.module.css';

function Frame({ratio = '1 / .6', link, className}) {
  return (
    <iframe
      src={link}
      style={{border: '0px', aspectRatio: ratio}}
      allowFullScreen={true}
      className={`${style['frame']} ${className}`}
      loading="lazy"
    />
  );
}

export default Frame;
