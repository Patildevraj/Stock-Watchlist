import { Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from '../Components/Home/Home';
import WatchList from '../Components/WatchList/WatchList';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='WatchList' element={<WatchList />} />
            </Routes>
        </div>
    );
};

export default Routing;