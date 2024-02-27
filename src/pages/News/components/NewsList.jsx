/* eslint-disable react/prop-types */
import {NewsCard} from '../../../components';

function NewsList({listData}) {
  return (
    <div className="news-list">
      {listData
        ? listData.map((news, index) => {
            return (
              <>
                <NewsCard
                  key={index}
                  authorPicture={news.newsProfile.authorPict}
                  authorName={news.newsProfile.authorName}
                  commentsCount={news.newsProfile.commentsCount}
                  image={news.image}
                  title={news.title}
                />
              </>
            );
          })
        : ''}
    </div>
  );
}

export default NewsList;
