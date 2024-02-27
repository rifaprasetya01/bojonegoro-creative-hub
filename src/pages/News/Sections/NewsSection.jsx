import {useState} from 'react';
import {NewsList, Pagination} from '../components';
import {useEffect} from 'react';

import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/bch-building.jpeg';
import logo from '../../../assets/images/bch-logo.png';
import {useCallback} from 'react';

function NewsSection() {
  const dataPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [listData, setListData] = useState([]);

  const setCurrentPageHandler = (index) => {
    setCurrentPage(index ? index : 1);
  };

  const getDataPerPage = useCallback((rawData, dataPerPage, currentPage) => {
    let startIndex = dataPerPage * (currentPage - 1);
    let endIndex = dataPerPage * currentPage;
    setListData(rawData.slice(startIndex, endIndex));
  }, []);

  useEffect(() => {
    getDataPerPage(newsDatas, dataPerPage, currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDataPerPage, currentPage]);
  return (
    <section className="news-section section">
      <NewsList listData={listData} />

      <Pagination
        dataLength={newsDatas.length}
        dataPerPage={dataPerPage}
        currentPage={currentPage}
        paginationOnClickHandler={setCurrentPageHandler}
      />
    </section>
  );
}

export default NewsSection;

const newsDatas = [
  {
    newsProfile: {
      authorPict: logo,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: logo,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img2,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: img3,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img2,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: logo,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: logo,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img2,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: img3,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img2,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: img2,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img3,
    title:
      'Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: img2,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img2,
    title:
      'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: img2,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img2,
    title:
      'Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: img2,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img3,
    title:
      'Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: img2,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img2,
    title:
      'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
  {
    newsProfile: {
      authorPict: img2,
      authorName: 'BCH',
      commentsCount: 23,
    },
    image: img2,
    title:
      'Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Remex dolorem odio inventore nesciunt qui!',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolore debitis asperiores, neque, ad voluptas tempore ab rem,',
  },
];
