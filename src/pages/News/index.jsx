import {PageHeader} from '../../components';
import {NewsSection} from './Sections';

import './news.css';

function News() {
  return (
    <div className="news-page">
      <PageHeader text={'News'} />

      <NewsSection />
    </div>
  );
}

export default News;
