/* eslint-disable react/jsx-key */
import {
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa6';

import {SectionHeader} from '../../../components';

function SocialMediaSection() {
  return (
    <section className="social-media-section section">
      <SectionHeader
        subheading={'Social Media'}
        heading={'Get Close With Us'}
      />

      <main className="social-media-wrapper">
        {sosmedDatas.map((data, idx) => {
          return (
            <a key={idx} href={data.linkTo} className="social-media-icon">
              {data.icon}
            </a>
          );
        })}
      </main>
    </section>
  );
}

export default SocialMediaSection;

const sosmedDatas = [
  {
    linkTo: 'www.tiktok.com/',
    icon: <FaTiktok />,
  },
  {
    linkTo: 'www.facebook.com/',
    icon: <FaFacebook />,
  },
  {
    linkTo: 'www.instagram.com/',
    icon: <FaInstagram />,
  },
  {
    linkTo: 'www.linkedin.com/',
    icon: <FaLinkedin />,
  },
  {
    linkTo: 'www.youtube.com/',
    icon: <FaYoutube />,
  },
  {
    linkTo: 'www.twitter.com/',
    icon: <FaTwitter />,
  },
];
