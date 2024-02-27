import {PageHeader} from '../../components';
import {
  ArticleSection,
  DropdownArticleSection,
  YoutubeEmbedSection,
} from './Sections';

import './about.css';

function About() {
  return (
    <div className="about-page">
      <PageHeader text={'About'} />

      <YoutubeEmbedSection />

      <ArticleSection />

      <DropdownArticleSection />
    </div>
  );
}

export default About;
