import {useState} from 'react';

import {FaCircleCheck} from 'react-icons/fa6';

import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/bch-building.jpeg';

function FloorReviewSection() {
  const [choosedFloor, setChoosedFloor] = useState(floorDB['basement']);
  const [isActiveNav, setActiveNav] = useState('basement');

  const roomReviewNavigationHandler = (keyFloor) => {
    setChoosedFloor(floorDB[keyFloor]);
    setActiveNav(keyFloor);
  };
  return (
    <section className="floor-review-section section">
      <nav className="floor-navigation">
        <button
          onClick={() => roomReviewNavigationHandler('basement')}
          className={`${
            isActiveNav === 'basement' ? 'activeFloor' : ''
          } nav-btn btn btn-md btn-primary`}>
          basement
        </button>
        <button
          onClick={() => roomReviewNavigationHandler('floor1')}
          className={`${
            isActiveNav === 'floor1' ? 'activeFloor' : ''
          } nav-btn btn btn-md btn-primary`}>
          Floor 1
        </button>
        <button
          onClick={() => roomReviewNavigationHandler('floor2')}
          className={`${
            isActiveNav === 'floor2' ? 'activeFloor' : ''
          } nav-btn btn btn-md btn-primary`}>
          Floor 2
        </button>
        <button
          onClick={() => roomReviewNavigationHandler('floor3')}
          className={`${
            isActiveNav === 'floor3' ? 'activeFloor' : ''
          } nav-btn btn btn-md btn-primary`}>
          Floor 3
        </button>
        <button
          onClick={() => roomReviewNavigationHandler('floor4')}
          className={`${
            isActiveNav === 'floor4' ? 'activeFloor' : ''
          } nav-btn btn btn-md btn-primary`}>
          Floor 4
        </button>
        <button
          onClick={() => roomReviewNavigationHandler('floor5')}
          className={`${
            isActiveNav === 'floor5' ? 'activeFloor' : ''
          } nav-btn btn btn-md btn-primary`}>
          Floor 5
        </button>
        <button
          onClick={() => roomReviewNavigationHandler('floor6')}
          className={`${
            isActiveNav === 'floor6' ? 'activeFloor' : ''
          } nav-btn btn btn-md btn-primary`}>
          Floor 6
        </button>
        <button
          onClick={() => roomReviewNavigationHandler('floor7')}
          className={`${
            isActiveNav === 'floor7' ? 'activeFloor' : ''
          } nav-btn btn btn-md btn-primary`}>
          Floor 7
        </button>
      </nav>

      <main className="body-floor-review">
        <img
          src={
            choosedFloor && choosedFloor.bannerImg ? choosedFloor.bannerImg : ''
          }
          alt="banner photo floor"
          className="banner-photo"
        />
        <main className="body-content">
          <h1 className="heading heading-1">
            {choosedFloor && choosedFloor.floor ? choosedFloor.floor : ''}
          </h1>
          <h2 className="subheading ">
            {choosedFloor && choosedFloor.floorName
              ? choosedFloor.floorName
              : ''}
          </h2>
          <ul className="floor-features">
            {choosedFloor && choosedFloor.fasilities
              ? choosedFloor.fasilities.map((facility, index) => {
                  return (
                    <li
                      className="features-item text-lg poppins-semibold"
                      key={index}>
                      <FaCircleCheck />
                      {facility}
                    </li>
                  );
                })
              : ''}
          </ul>
        </main>
      </main>
    </section>
  );
}

export default FloorReviewSection;

const floorDB = {
  basement: {
    bannerImg: img1,
    floor: 'basement',
    floorName: 'the Champion Floor',
    fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
  },
  floor1: {
    bannerImg: img2,
    floor: 'floor 1',
    floorName: 'the Champion Floor',
    fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
  },
  floor2: {
    bannerImg: img3,
    floor: 'floor 2',
    floorName: 'the Champion Floor',
    fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
  },
  floor3: {
    bannerImg: img1,
    floor: 'floor 3',
    floorName: 'the Champion Floor',
    fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
  },
  floor4: {
    bannerImg: img2,
    floor: 'floor 4',
    floorName: 'the Champion Floor',
    fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
  },
  floor5: {
    bannerImg: img2,
    floor: 'floor 5',
    floorName: 'the Champion Floor',
    fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
  },
  floor6: {
    bannerImg: img2,
    floor: 'floor 6',
    floorName: 'the Champion Floor',
    fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
  },
  floor7: {
    bannerImg: img2,
    floor: 'floor 7',
    floorName: 'the Champion Floor',
    fasilities: ['Facility 1', 'Facility 2', 'Facility 4', 'Facility 5'],
  },
};
