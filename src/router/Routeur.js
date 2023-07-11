import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import NoMatch from './NoMatch';
import Navigation from '../layout/Navigation';
import InfoSpaceX from '../components/InfoSpaceX';
import Fusee from '../components/VersionFusee/V_Fusee_list';

const Routeur = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<InfoSpaceX />} />
          <Route path="/rockets" element={<Fusee />} />
          {/* <Route path="/about" component={About} /> */}
          <Route component={NoMatch} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Routeur;
