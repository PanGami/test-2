import React from 'react';
import {Switch, Routes, Route} from 'react-router-dom';
import Gallery from './Gallery';
import Test from './Test';
import './App.css';

// import TentangSaya from './tentangsaya';
// import Karya from './karya';
// import Kontak from './kontak';
// import List from './list';


const Utama = () => (
    <Routes>
        <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
)

export default Utama;