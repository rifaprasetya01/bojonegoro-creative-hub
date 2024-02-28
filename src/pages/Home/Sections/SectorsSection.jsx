import {Fragment} from 'react';
import {
  FaGamepad,
  FaPenRuler,
  FaCouch,
  FaMusic,
  FaPalette,
  FaPenFancy,
  FaShirt,
  FaBowlFood,
  FaPhotoFilm,
  FaCamera,
  FaPenNib,
  FaTowerCell,
  FaIndustry,
  FaRectangleAd,
  FaMasksTheater,
  FaUpload,
  FaMobileScreen,
} from 'react-icons/fa6';

import {Card, SectionHeader} from '../../../components';

import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import {useState} from 'react';
import {useEffect} from 'react';

function SectorsSection() {
  const limiter = 8;
  const [visibleSectors, setVisibleSectors] = useState([]);

  useEffect(() => {
    setVisibleSectors(sectorCardDatas.slice(0, limiter));
  }, []);

  const showAllHandler = () => {
    if (visibleSectors.length > limiter) {
      setVisibleSectors(sectorCardDatas.slice(0, limiter));
    } else {
      setVisibleSectors(sectorCardDatas);
    }
  };

  return (
    <section className="sectors-section section">
      <SectionHeader
        subheading={'Economic Sectors'}
        heading={'17 economic sectors of Bojonegoro city'}
      />
      <main className="body">
        {visibleSectors.map((data, index) => {
          return (
            <Fragment key={index}>
              <Card
                icon={<data.icon />}
                subheading={data.subheading}
                heading={data.heading}
                background={data.background}
              />
            </Fragment>
          );
        })}
      </main>

      <button
        onClick={showAllHandler}
        className="show-hide-btn btn btn-primary btn-md">
        {visibleSectors.length > limiter ? 'Hide' : 'Show All'}
      </button>
    </section>
  );
}

export default SectorsSection;

const sectorCardDatas = [
  {
    icon: FaGamepad,
    subheading: 'Sector',
    heading: 'game development',
    background: img1,
  },
  {
    icon: FaPenRuler,
    subheading: 'Sector',
    heading: 'craft',
    background: img2,
  },
  {
    icon: FaCouch,
    subheading: 'Sector',
    heading: 'design interior',
    background: img1,
  },
  {
    icon: FaMusic,
    subheading: 'Sector',
    heading: 'music',
    background: img2,
  },
  {
    icon: FaPalette,
    subheading: 'Sector',
    heading: 'art',
    background: img1,
  },
  {
    icon: FaPenFancy,
    subheading: 'Sector',
    heading: 'product design',
    background: img2,
  },
  {
    icon: FaShirt,
    subheading: 'Sector',
    heading: 'fashion',
    background: img1,
  },
  {
    icon: FaBowlFood,
    subheading: 'Sector',
    heading: 'culinary',
    background: img2,
  },
  {
    icon: FaPhotoFilm,
    subheading: 'Sector',
    heading: 'film, animation, & video',
    background: img1,
  },
  {
    icon: FaCamera,
    subheading: 'Sector',
    heading: 'photography',
    background: img2,
  },
  {
    icon: FaPenNib,
    subheading: 'Sector',
    heading: 'visual communication design',
    background: img1,
  },
  {
    icon: FaTowerCell,
    subheading: 'Sector',
    heading: 'television and radio',
    background: img2,
  },
  {
    icon: FaIndustry,
    subheading: 'Sector',
    heading: 'arsitecture',
    background: img1,
  },
  {
    icon: FaRectangleAd,
    subheading: 'Sector',
    heading: 'advertising',
    background: img2,
  },
  {
    icon: FaMasksTheater,
    subheading: 'Sector',
    heading: 'performing arts',
    background: img1,
  },
  {
    icon: FaUpload,
    subheading: 'Sector',
    heading: 'publishing',
    background: img2,
  },
  {
    icon: FaMobileScreen,
    subheading: 'Sector',
    heading: 'application',
    background: img1,
  },
];
