import {useInTablet} from '../../../hooks';
import {Frame} from '../../../components';

function GoogleMapEmbedSection() {
  const inTablet = useInTablet();
  return (
    <section className="googlemap-embed-section section-full">
      <Frame
        link={
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.765614403838!2d111.89289227379452!3d-7.153076570172995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7781f2d2fd0e1d%3A0x19744eb38a0003a8!2sBOJONEGORO%20CREATIVE%20HUB%20(BCH)!5e0!3m2!1sid!2sid!4v1705720599611!5m2!1sid!2sid'
        }
        ratio={`${inTablet ? '1 / 0.5' : '1 / 1'}`}
      />
    </section>
  );
}

export default GoogleMapEmbedSection;
