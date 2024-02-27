/* eslint-disable react/prop-types */
import {useState} from 'react';
import {FaChevronDown, FaChevronRight} from 'react-icons/fa6';

function DropdownArticleSection() {
  return (
    <section className="dropdown-article-section section">
      <DropdownArticle
        title={'Lorem ipsum dolor'}
        article={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia beatae ex alias dicta a officiis totam adipisci similique, aspernatur, repudiandae doloribus aut quos sequi illo quod voluptatem maiores sit.'
        }
      />
      <DropdownArticle
        title={'Lorem ipsum dolor'}
        article={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia beatae ex alias dicta a officiis totam adipisci similique, aspernatur, repudiandae doloribus aut quos sequi illo quod voluptatem maiores sit.'
        }
      />
      <DropdownArticle
        title={'Lorem ipsum dolor'}
        article={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia beatae ex alias dicta a officiis totam adipisci similique, aspernatur, repudiandae doloribus aut quos sequi illo quod voluptatem maiores sit.'
        }
      />
    </section>
  );
}

export default DropdownArticleSection;

const DropdownArticle = ({title, article}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className={`dropdown-article`}>
      <header
        onClick={() => setDropdownOpen((prev) => !prev)}
        className={`dropdown-header`}>
        <h1 className={`header-heading heading-2`}>{title}</h1>
        <i className={`header-icon`}>
          {isDropdownOpen ? <FaChevronDown /> : <FaChevronRight />}
        </i>
      </header>
      <article
        className={`dropdown-body ${
          isDropdownOpen ? 'dropdown-body--active' : ''
        } `}>
        <p className={`body-content text-lg poppins-regular`}>{article}</p>
      </article>
    </div>
  );
};
