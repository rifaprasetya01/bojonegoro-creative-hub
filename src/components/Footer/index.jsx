import {Link} from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaLocationPin,
  FaCopyright,
} from 'react-icons/fa6';

import bchLogo from '../../assets/images/bch-logo.png';

import style from './style.module.css';

function Footer() {
  return (
    <footer className={`${style['footer']}`}>
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

      <main className={`${style['main-content']}`}>
        <div className={`${style['sublinks']} ${style['content']}`}>
          <h1 className={`${style['sublink-heading']} ${style['heading']}`}>
            Sub Links
          </h1>
          <Link to={'/'} className={`${style['link']}`}>
            Visitation
          </Link>
          <Link to={'/'} className={`${style['link']}`}>
            Event
          </Link>
          <Link to={'/'} className={`${style['link']}`}>
            Big Data
          </Link>
        </div>
        <div className={`${style['socialmedia']} ${style['content']}`}>
          <h1 className={`${style['socialmedia-heading']} ${style['heading']}`}>
            Social Media
          </h1>
          <Link to={'/'} className={`${style['link']}`}>
            <i className={`${style['link-icon']}`}>
              <FaFacebook />
            </i>
            Facebook
          </Link>
          <Link to={'/'} className={`${style['link']}`}>
            <i className={`${style['link-icon']}`}>
              <FaInstagram />
            </i>
            Instagram
          </Link>
          <Link to={'/'} className={`${style['link']}`}>
            <i className={`${style['link-icon']}`}>
              <FaYoutube />
            </i>
            Youtube
          </Link>
          <Link to={'/'} className={`${style['link']}`}>
            <i className={`${style['link-icon']}`}>
              <FaTwitter />
            </i>
            Twitter
          </Link>
          <Link to={'/'} className={`${style['link']}`}>
            <i className={`${style['link-icon']}`}>
              <FaTiktok />
            </i>
            Tiktok
          </Link>
          <Link to={'/'} className={`${style['link']}`}>
            <i className={`${style['link-icon']}`}>
              <FaLinkedinIn />
            </i>
            LinkedIn
          </Link>
        </div>
        <div className={`${style['contactinfo']} ${style['content']}`}>
          <h1 className={`${style['contactinfo-heading']} ${style['heading']}`}>
            Contact Info
          </h1>
          <div className={`${style['wrapper']}`}>
            <i className={`${style['icon']}`}>
              <FaPhone />
            </i>
            <p className={`${style['text']}`}>
              <strong>Customer Service</strong> <br />
              0812-2695-0204
            </p>
          </div>
          <div className={`${style['wrapper']}`}>
            <i className={`${style['icon']}`}>
              <FaEnvelope />
            </i>
            <p className={`${style['text']}`}>
              <strong>Relation and Partnership</strong>
              <br />
              kerjasama.bch@gmail.com
            </p>
          </div>
          <div className={`${style['wrapper']}`}>
            <i className={`${style['icon']}`}>
              <FaLocationPin />
            </i>
            <p className={`${style['text']}`}>
              <strong>Location</strong>
              <br />
              Jl. Pemuda Timur No. 7b, Ngrowo, Kec. Bojonegoro, Kab. Bojonegoro,
              Jawa Timur 62119
            </p>
          </div>
        </div>
      </main>

      <hr />

      <p className={`${style['copyright']}`}>
        2022 - Now <FaCopyright /> Copyright by Bojonegoro Crative Hub
      </p>
    </footer>
  );
}

export default Footer;
