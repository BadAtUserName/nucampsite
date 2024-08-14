import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import ContactPage from './pages/ContactPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import './App.css';



import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';

import { fetchCampsites } from './features/campsites/campsitesSlice';




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching data...");
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions())
}, [dispatch]);


  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} /> 
          <Route path='contact' element={<ContactPage />} />
          <Route path='directory' element={<CampsitesDirectoryPage />} />
          <Route path='directory/:campsiteId' element={<CampsiteDetailPage/>}/>
          <Route path='about' element={<AboutPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;