import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import HistorySpaceX from '../components/HistorySpaceX'
import InfoSpaceX from '../components/InfoSpaceX'
import MembersDragon from '../components/MembersDragon'
import VersionFuseeSpaceX from '../components/VersionFuseeSpaceX'
import Home from '../pages/Home';

const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' component={Home} />
                <Route path='/history' component={HistorySpaceX} />
                <Route exact path='/info' component={InfoSpaceX} />
                <Route path='/members' component={MembersDragon} />
                <Route path='/version' component={VersionFuseeSpaceX} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur