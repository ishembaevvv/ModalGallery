import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ModalSwitch from '../ModalSwitch/ModalSwitch';
import './ModalGalleryExaple.scss';

export default function ModalGalleryExaple() {
    return (
        <div className='ModalGalleryExaple'>
            <Router>
                <ModalSwitch />
            </Router>
        </div>
    )
}

