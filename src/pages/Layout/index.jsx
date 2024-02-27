import {Fragment, Suspense} from 'react';
import {Outlet} from 'react-router-dom';

import {Navbar, Footer} from '../../components';

import style from './style.module.css';

function index() {
  return (
    <Fragment>
      <Navbar />
      <main className={`${style['container']}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
}

export default index;
