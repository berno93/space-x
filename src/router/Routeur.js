import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import NoMatch from './NoMatch';
import Navigation from '../layout/Navigation';
import Rocket from '../components/Version_Rockets/V_Rockets_list';
import History from '../components/HistorySpaceX';
import Members from '../components/MembersDragon';
import MemberDetails from '../components/MemberDetails';
import RocketDetails from '../components/Version_Rockets/V_Rockets_details';
import InfoSpaceX from '../components/InfoSpaceX';

const Routeur = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<InfoSpaceX />} />
          <Route path="/rockets" element={<Rocket />} />
          <Route path="/rockets/:id" element={<RocketDetails />} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/history" element={<History />} />
          <Route exact path="/members" element={<Members />} />
          <Route exact path="/members/:id" element={<MemberDetails />} />
          <Route component={NoMatch} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Routeur;
