// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import Navbar from './components/Navbar';
// import Gallery from './components/Gallery';
import Home from './components/Home';
// import Contact from './components/Contact';
// import Projects from './components/Projects';
// import Help from './components/Help';

import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
// import Team from './components/Team';
import Services from './components/Services';
import Gallary from './components/Gallary';
import Contact from './components/Contact';

const InitialRouteSetter = () => {
  const navigate = useNavigate();
  const [isInitialRouteSet, setIsInitialRouteSet] = useState(false);

  useEffect(() => {
    if (!isInitialRouteSet) {
      // Set the initial route to '/' only once when the component mounts
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

          {/* <Route path="/Team" element={<Team />} />
          <Route path="/Projects" element={<Projects />} />
          
          */}
        </Routes>
        {/* <Footer /> */}
      </Router>
      <NotificationContainer />
    </>
  );
}

export default App;