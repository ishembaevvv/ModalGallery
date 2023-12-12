import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Gallery from '../../Pages/Gallery/Gallery';
import ImageView from '../../Pages/ImageView/ImageView';

export default function ModalSwitch() {
    let location = useLocation();
    let background = location.state && location.state.background;
    return (
        <div>
            <Routes location={background || location}>
                <Route exact path='/' element={<Home />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/img/:id' element={<ImageView />} />
            </Routes>
        </div>
    )
}

