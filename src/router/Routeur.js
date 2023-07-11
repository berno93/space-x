import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import NoMatch from './NoMatch';
import Navigation from '../layout/Navigation';

const Routeur = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          {/* <Route exact path="/" component={} /> */}
          {/* <Route path="/about" component={About} /> */}
          <Route component={NoMatch} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Routeur;
