import {FaCheck} from 'react-icons/fa6';
import {SectionHeader} from '../../../components';

function AboutSection() {
  return (
    <section className="about-section section">
      <SectionHeader
        textAlign={'start'}
        subheading={'About'}
        heading={'Bojonegoro creative city & creative culture ambience'}
      />
      <main className="about-body">
        <p className="article text-body-lg">
          <strong>Bojonegoro Creative Hub</strong> or <strong>BCH</strong> is a
          form of contribution from the Bojonegoro City Government through the
          Industry and Trade Cooperative Service in managing and maintaining the
          Creative Economy ecosystem in Bojonegoro City. BCH will be a forum for
          EKRAF actors in Bojonegoro City to be able to collaborate and grow
          together among the Creative Industries.
        </p>
        <ul className="features">
          <li className="features-item text-lg poppins-semibold">
            <FaCheck />
            High Speed Internet
          </li>
          <li className="features-item text-lg poppins-semibold">
            <FaCheck />
            Fully Air Conditioned Rooms
          </li>
          <li className="features-item text-lg poppins-semibold">
            <FaCheck />
            Cleaning Service
          </li>
          <li className="features-item text-lg poppins-semibold">
            <FaCheck />
            Functional Hall
          </li>
          <li className="features-item text-lg poppins-semibold">
            <FaCheck />
            Entertainment Rooftop
          </li>
        </ul>
      </main>
    </section>
  );
}

export default AboutSection;
