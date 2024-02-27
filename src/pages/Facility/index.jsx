import {PageHeader} from '../../components';
import {
  CreativeRoomSection,
  FacilitySection,
  FloorReviewSection,
  SupportingFacilitiesSection,
} from './Sections';

import './facility.css';

function Facility() {
  return (
    <div className="facility-page">
      <PageHeader text={'Facility'} />

      <FacilitySection />

      <CreativeRoomSection />

      <SupportingFacilitiesSection />

      <FloorReviewSection />
    </div>
  );
}

export default Facility;
