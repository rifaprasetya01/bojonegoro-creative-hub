import {lazy} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './pages/Layout';
import {Fragment} from 'react';
import {ScrollToTop} from './components';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const FacilityPage = lazy(() => import('./pages/Facility'));
const NewsPage = lazy(() => import('./pages/News'));
const ContactPage = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/facility" element={<FacilityPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
