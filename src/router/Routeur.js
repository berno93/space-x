import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Main from '../pages/Main'
import About from '../pages/About'
import NoMatch from './NoMatch'
import Navigation from '../layout/Navigation'
 
const Routeur = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/about' component={About} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
    )
}
 
export default Routeur