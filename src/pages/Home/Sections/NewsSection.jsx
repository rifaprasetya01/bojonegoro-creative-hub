import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import {NewsCard, SectionHeader} from '../../../components';

import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/bch-building.jpeg';
import logo from '../../../assets/images/bch-logo.png';

import 'swiper/css';

function NewsSection() {
  return (
    <section className="news-section section-full">
      <SectionHeader
        subheading={'BCH News'}
        heading={'updates on all our activities'}
      />

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
        className="news-slider">
        {newsDatas.map((news, index) => {
          return (
            <SwiperSlide key={index}>
              <NewsCard
                authorPicture={news.newsProfile.authorPict}
                authorName={news.newsProfile.authorName}
                commentsCount={news.newsProfile.commentsCount}
                image={news.image}
                title={news.title}
                article={news.article}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default NewsSection;

const newsDatas = [
  {
    newsProfile: {
      authorPict: logo,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: logo,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img2,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: img3,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img2,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: img2,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img3,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: img2,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img2,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: img2,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img2,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
];
