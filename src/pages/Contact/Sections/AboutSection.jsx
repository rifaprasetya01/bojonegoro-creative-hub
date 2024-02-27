import {SectionHeader} from '../../../components';

import img from '../../../assets/images/bch-building.jpeg';

function AboutSection() {
  return (
    <section className="about-section section">
      <SectionHeader
        textAlign="start"
        subheading={'About'}
        heading={'What About BCH ?'}
      />

      <main className="section-body">
        <img
          src={img}
          alt="Bojonegoro Creative Hub building"
          className="company-photo"
          loading="lazy"
        />

        <p className="article text-body-lg">
          <strong>Bojonegoro Creative Hub</strong> or <strong>BCH</strong> is a
          form of contribution from the Bojonegoro City Government through the
          Industry and Trade Cooperative Service in managing and maintaining the
          Creative Economy ecosystem in Bojonegoro City. BCH will be a forum for
          EKRAF actors in Bojonegoro City to be able to collaborate and grow
          together among the Creative Industries.
        </p>
      </main>
    </section>
  );
}

export default AboutSection;
