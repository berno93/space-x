import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import NoMatch from './NoMatch';
import Navigation from '../layout/Navigation';
import History from '../components/HistorySpaceX';
import Members from '../components/MembersDragon';
import MemberDetails from '../components/MemberDetails';

const Routeur = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
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
