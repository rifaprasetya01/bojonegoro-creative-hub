/* eslint-disable react/prop-types */

import style from './style.module.css';

import {Link} from 'react-router-dom';
import {FaUser, FaComments, FaArrowRight} from 'react-icons/fa6';

function NewsCard({
  image,
  title,
  article,
  authorName,
  authorPicture,
  commentsCount,
}) {
  return (
    <>
      <div className={`${style['news__card']}`}>
        <Link to={'/'} className={`${style['news__card-header']}`}>
          <img src={image} alt="" className={`${style['header-img']}`} />
        </Link>
        <main className={`${style['news__card-body']}`}>
          <div className={`${style['body-profile__news']}`}>
            <img
              src={authorPicture}
              alt="profile picture"
              className={`${style['profile__news-profile__pict']}`}
            />
            <p
              className={`${style['profile__news-author__name']} text-base lato-bold`}>
              <FaUser />
              by {authorName}
            </p>
            <p
              className={`${style['profile__news-comments__count']} text-base lato-bold`}>
              <FaComments />
              {commentsCount} Comments
            </p>
          </div>
          <Link className={`${style['body-title']} text-2xl poppins-semibold`}>
            {title}
          </Link>
          <p className={`${style['body-article']} text-lg lato-light`}>
            {article}
          </p>
          <Link to={'/'} className={` btn btn-md btn-primary`}>
            See detail <FaArrowRight />
          </Link>
        </main>
      </div>
    </>
  );
}

export default NewsCard;
