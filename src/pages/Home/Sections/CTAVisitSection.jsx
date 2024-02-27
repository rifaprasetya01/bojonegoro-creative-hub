import {Link} from 'react-router-dom';
import img from '../../../assets/images/img2.jpg';

function CTABookingSection() {
  return (
    <section className="cta-visit-section section">
      <div className="container">
        <img
          src={img}
          alt="background section"
          className="background-section"
        />
        <div className="body-section">
          <h1 className="headline ">
            Create and collaborate together at the <br /> Bojonegoro Creative
            Hub
          </h1>
          <Link className="btn btn-primary">Space Booking</Link>
        </div>
      </div>
    </section>
  );
}

export default CTABookingSection;
