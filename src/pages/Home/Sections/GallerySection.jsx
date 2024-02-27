import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';

import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/bch-building.jpeg';

import 'swiper/css';

function GallerySection() {
  return (
    <section className="gallery-section">
      <h1 className="gallery-header heading-1">Our Photo Gallery</h1>

      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{delay: 2000, pauseOnMouseEnter: true}}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="gallery-slider">
        {dataimages.map((img, index) => {
          return (
            <SwiperSlide key={index} className="gallery-slide">
              <img
                loading="lazy"
                src={img}
                alt="galery photo"
                className="slide-photo"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default GallerySection;

const dataimages = [img1, img2, img3, img1, img2, img3];
