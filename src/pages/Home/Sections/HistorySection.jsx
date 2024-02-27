import {Link} from 'react-router-dom';
import {FaIcons, FaPeopleRoof} from 'react-icons/fa6';
import {SectionHeader} from '../../../components';

import img from '../../../assets/images/img1.jpg';

function HistorySection() {
  return (
    <section className="history-section section">
      <aside className="side-content">
        <div className="banner-content">
          <img
            src={img}
            alt="Background Banner"
            className="background-banner"
          />
          <h1 className="body-banner heading-2">
            More than 60 rooms available
          </h1>
        </div>

        <div className="buttons-wrapper">
          <Link className="collab-room-btn btn-link">
            <FaPeopleRoof />
            Collaboration <br /> Rooms
          </Link>
          <Link className="collab-room-btn btn-link">
            <FaIcons />
            Creative <br /> Rooms
          </Link>
        </div>
      </aside>

      <main className="body-content">
        <SectionHeader
          subheading={'History'}
          heading={'Bojonegoro Creative Hub Journey'}
          textAlign="start"
        />

        <p className="text-body-lg">
          Starting with a coffee shop discussion to a communication room, a need
          was born for a communication forum across communities, associations,
          ties and creative stakeholders in building synergy and collaboration.
          How to realize the idea and need, namely a gathering space and
          networking space, was born and initiated with Hexa Helix as one of the
          main goals from the results of FGDs that were held dozens of times.
          2016 was a milestone in the history of the establishment of a KEK
          (Creative Economy Committee) in Bojonegoro City which produced a
          creative economy roadmap and how the need for space and research
          centers became truly important and real, as proven from 2019 until
          today there have been many creative activities that have been carried
          out. followed by many associations and communities. collaborate and
          grow together between the Creative Industries.
        </p>
      </main>
    </section>
  );
}

export default HistorySection;
