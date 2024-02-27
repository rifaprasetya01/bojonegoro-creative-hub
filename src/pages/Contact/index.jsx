import {PageHeader} from '../../components';
import {
  AboutSection,
  ContactInfo,
  GoogleMapEmbedSection,
  SocialMediaSection,
} from './Sections';

import './contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <PageHeader text={'Contact'} />

      <ContactInfo />

      <AboutSection />

      <SocialMediaSection />

      <GoogleMapEmbedSection />
    </div>
  );
}

export default Contact;
