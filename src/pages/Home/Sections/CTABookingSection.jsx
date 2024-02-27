import {Link} from 'react-router-dom';
import img from '../../../assets/images/img1.jpg';

function CTABookingSection() {
  return (
    <section className="cta-booking-section section">
      <div className="container">
        <img
          src={img}
          alt="background section"
          className="background-section"
        />
        <div className="body-section">
          <h1 className="headline ">
            Plan your visit to <br /> Bojonegoro Creative Hub
          </h1>
          <Link className="btn btn-primary">Visit BCH</Link>
        </div>
      </div>
    </section>
  );
}

export default CTABookingSection;
