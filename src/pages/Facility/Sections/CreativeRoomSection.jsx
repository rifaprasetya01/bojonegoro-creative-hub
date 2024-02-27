import {CreativeRoomFloorContent} from '../components';

import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/bch-building.jpeg';
import {SectionHeader} from '../../../components';

function CreativeRoomSection() {
  return (
    <section className="creative-room-section section">
      <SectionHeader subheading={'Rooms'} heading={'Creative Room MCC'} />

      <CreativeRoomFloorContent floor={'2'} dataSlide={dataSlide} />

      <CreativeRoomFloorContent floor={'3'} dataSlide={dataSlide} />

      <CreativeRoomFloorContent floor={'4 & 5'} dataSlide={dataSlide} />
    </section>
  );
}

export default CreativeRoomSection;

const dataSlide = [
  {
    photo: img1,
    roomName: 'Lorem ipsum',
    activityName: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    photo: img2,
    roomName: 'Lorem ipsum',
    activityName: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    photo: img3,
    roomName: 'Lorem ipsum',
    activityName: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    photo: img1,
    roomName: 'Lorem ipsum',
    activityName: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    photo: img2,
    roomName: 'Lorem ipsum',
    activityName: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    photo: img3,
    roomName: 'Lorem ipsum',
    activityName: 'Lorem ipsum dolor sit amet consectetur',
  },
];
