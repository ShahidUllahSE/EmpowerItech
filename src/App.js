// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import Navbar from './components/Navbar';
import Gallary from './components/Gallary';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

const InitialRouteSetter = () => {
  const navigate = useNavigate();
  const [isInitialRouteSet, setIsInitialRouteSet] = useState(false);

  useEffect(() => {
    if (!isInitialRouteSet) {
      navigate('/');
      setIsInitialRouteSet(true);
    }
  }, [navigate, isInitialRouteSet]);

  return null;
};

function App() {
  return (
    <>
      <Router>
        <InitialRouteSetter />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Gallery" element={<Gallary />} />
          <Route path="/Contact" element={<Contact />} />

         
        </Routes>
        <Footer />
      </Router>
      <NotificationContainer />
    </>
  );
}

export default App;