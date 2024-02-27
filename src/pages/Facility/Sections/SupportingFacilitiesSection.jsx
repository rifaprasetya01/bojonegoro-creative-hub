/* eslint-disable react/prop-types */
import {FaCheck} from 'react-icons/fa6';
import {SectionHeader} from '../../../components';

function SupportingFacilitiesSection() {
  return (
    <section className="supporting-facilities-section section">
      <SectionHeader
        subheading={'More Facility'}
        heading={'Supportomg Facilities'}
        textAlign="start"
      />
      <ul className="facility-list">
        {facilitiesList.map((item) => {
          return (
            <>
              <ListItem item={item} />
            </>
          );
        })}
      </ul>
    </section>
  );
}

export default SupportingFacilitiesSection;

const ListItem = ({item}) => {
  return (
    <>
      <li className="list-item text-lg poppins-semibold">
        <FaCheck /> {item}
      </li>
    </>
  );
};

const facilitiesList = [
  'Main Stairs & Amphiteaters',
  'Animation & Motion Capture Studio',
  'Design Archives & City Planning Gallery',
  'Broadcast & Podcast Room',
  'Audio & Video Recording',
  'Training Institution',
  'Event Space',
  'Incubator',
  'Fashion Room',
  'Food Lab',
  'Smart Environment',
  'Ads Videotron',
  'Perpustakaan & Ruang Baca',
  'Fitness Room',
  'Hotel Capsule',
  'MCC Digital Platform',
  'MCC Cafe & Lounge',
  'MCC KID Interactive Zone',
  'Workshop Seni',
  'Public Space',
  'Ruang Komputer',
  'Musholla & Pantry',
  'Lavatory',
  'Multimedia Videotron',
];
