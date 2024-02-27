import {Fragment} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import {Link} from 'react-router-dom';

import {SectionHeader} from '../../../components';
import {useInTablet} from '../../../hooks';

import logo from '../../../assets/images/bch-logo.png';

import 'swiper/css';

function CollaborationSection() {
  const inTablet = useInTablet();
  return (
    <section className="collaboration-section section-full">
      <header className="collaboration-header">
        <SectionHeader
          subheading={'Collaboration'}
          heading={'potential for collaboration'}
          textAlign={inTablet ? 'start' : 'center'}
        />
        <Link to={'/'} className="collaboration-btn btn btn-md btn-primary">
          Collaborate Now
        </Link>
      </header>

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
            slidesPerView: 4,
          },
        }}
        className="collaboration-slider">
        {collaborationDatas.map((data, index) => {
          return (
            <SwiperSlide className="collaboration-slide" key={index}>
              {data.map((img, idx) => {
                return (
                  <Fragment key={idx}>
                    <img
                      loading="lazy"
                      src={img}
                      alt="Collaborator Logo"
                      className="collaborator"
                    />
                  </Fragment>
                );
              })}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default CollaborationSection;

const collaborationDatas = [
  [logo, logo],
  [logo, logo],
  [logo, logo],
  [logo, logo],
  [logo, logo],
  [logo, logo],
  [logo, logo],
  [logo, logo],
  [logo, logo],
];
