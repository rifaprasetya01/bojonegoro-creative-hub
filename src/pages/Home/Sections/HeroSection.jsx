/* eslint-disable react/prop-types */
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Autoplay, EffectFade} from 'swiper/modules';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa6';

import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import logo from '../../../assets/images/bch-logo.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function HeroSection() {
  return (
    <section className="hero-section">
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
        }}
        pagination={{
          clickable: true,
          el: '.paginations',
          type: 'bullets',
          bulletClass: 'pagination-bullet',
          bulletActiveClass: 'pagination-active',
        }}
        effect="fade"
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        className="hero-slider">
        <SwiperSlide className="slide slide-1">
          <img
            loading="lazy"
            src={img1}
            alt="Background Slide"
            className="slide-bg"
          />
          <main className="slide-body">
            <h1 className="subheading">
              <img
                src={logo}
                alt="Bojonegoro Creative Hub Logo"
                className="logo"
                loading="lazy"
              />
              Wellcome to BCH
            </h1>
            <h2 className="heading heading-1">Creative Culture Ambience</h2>
            <p className="cta-text text-body">
              Plan your visit by click button below
            </p>
            <button className="cta-btn btn btn-primary">Visit BCH</button>
          </main>
        </SwiperSlide>
        <SwiperSlide className="slide slide-2">
          <img
            loading="lazy"
            src={img2}
            alt="Background Slide"
            className="slide-bg"
          />
          <main className="slide-body">
            <h1 className="subheading">
              <img
                src={logo}
                alt="Bojonegoro Creative Hub Logo"
                className="logo"
                loading="lazy"
              />
              Wellcome to BCH
            </h1>
            <h2 className="heading heading-1">Creative Culture Ambience</h2>
            <p className="cta-text text-body">
              Booking BCH spaces by click button below
            </p>
            <button className="cta-btn btn btn-primary">Space Booking</button>
          </main>
        </SwiperSlide>

        <div className="navigations">
          <button className="nav-btn prev-btn">
            <FaChevronLeft />
          </button>
          <button className="nav-btn next-btn">
            <FaChevronRight />
          </button>
        </div>

        <div className="paginations"></div>
      </Swiper>
    </section>
  );
}

export default HeroSection;
