import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms';


function App() {
  return (
    <>
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<AllRooms />} />
        
      </Routes>
      <Footer/>
    </Router>
 
      
      

    
    </>
  );
}

export default App;
