/* eslint-disable react/prop-types */
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import {Fragment} from 'react';

function CreativeRoomFloorContent({dataSlide, floor}) {
  return (
    <div className="floor-content">
      <h1 className="floor-heading heading-2">Floor {floor}</h1>

      <Swiper
        loop={true}
        modules={[Pagination, Autoplay]}
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
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="floor-slider">
        {dataSlide.map((data, index) => {
          return (
            <Fragment key={index}>
              <SwiperSlide className="floor-slide">
                <img
                  src={data.photo}
                  alt="Activity Photo"
                  className="slide-background"
                />
                <main className="slide-body">
                  <h1 className="slide-heading heading-2">
                    {data.activityName}
                  </h1>
                  <p className="slide-text text-md poppins-regular">
                    - {data.roomName} -
                  </p>
                </main>
              </SwiperSlide>
            </Fragment>
          );
        })}
        <div className="paginations"></div>
      </Swiper>
    </div>
  );
}

export default CreativeRoomFloorContent;
