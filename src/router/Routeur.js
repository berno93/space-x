import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import NoMatch from './NoMatch';
import Navigation from '../layout/Navigation';
import Rocket from '../components/Version_Rockets/V_Rockets_list';
import History from '../components/Articles/HistorySpaceX';
import Members from '../components/Members/MembersDragon';
import MemberDetails from '../components/Members/MemberDetails';
import RocketDetails from '../components/Version_Rockets/V_Rockets_details';
import HistoryDetails from '../components/Articles/HistoryDetails';
import InfoSpaceX from '../components/InfoSpaceX/InfoSpaceX';
import LastLaunchInfo from '../components/Dernier_Lancement/Last_launch';
import RoadsterInfo from '../components/Roadster/Roadster';

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
          <Route path="/history/:id" element={<HistoryDetails />} />
          <Route exact path="/members" element={<Members />} />
          <Route exact path="/members/:id" element={<MemberDetails />} />
          <Route exact path="/last_lauch/" element={<LastLaunchInfo />} />
          <Route exact path="/roadster/" element={<RoadsterInfo />} />
          <Route component={NoMatch} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Routeur;
