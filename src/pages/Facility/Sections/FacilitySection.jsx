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
} from 'react-icons/fa6';

import {SectionHeader, Card} from '../../../components';

import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';

function FacilitySection() {
  return (
    <section className="facility-section section">
      <SectionHeader
        subheading={'Facility'}
        heading="Facilities & Infrastructure"
      />

      <main className="facility-body">
        {sectorCardDatas.map((data, index) => {
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
    </section>
  );
}

export default FacilitySection;

const sectorCardDatas = [
  {
    icon: FaGamepad,
    subheading: 'Floor 2, 3, & 5',
    heading: 'Multipurpose Area',
    background: img1,
  },
  {
    icon: FaPenRuler,
    subheading: 'Floor 3',
    heading: 'Creative Design Store',
    background: img2,
  },
  {
    icon: FaCouch,
    subheading: 'Floor 3',
    heading: 'Meeting room',
    background: img1,
  },
  {
    icon: FaMusic,
    subheading: 'Floor 4',
    heading: 'workshop',
    background: img2,
  },
  {
    icon: FaPalette,
    subheading: 'Floor 4 & 5',
    heading: 'Co-working space',
    background: img1,
  },
  {
    icon: FaPenFancy,
    subheading: 'Floor 7 & 8',
    heading: 'Cafe & Canteen',
    background: img2,
  },
  {
    icon: FaShirt,
    subheading: 'Floor 5',
    heading: 'Photo Studio',
    background: img1,
  },
  {
    icon: FaBowlFood,
    subheading: 'Floor 5',
    heading: 'amphitheater',
    background: img2,
  },
  {
    icon: FaPhotoFilm,
    subheading: 'Floor 6',
    heading: 'office room',
    background: img1,
  },
  {
    icon: FaCamera,
    subheading: 'Floor 6',
    heading: 'UMKM super store',
    background: img2,
  },
  {
    icon: FaPenNib,
    subheading: 'Floor 7',
    heading: 'Auditorium',
    background: img1,
  },
];
