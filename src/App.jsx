import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';


function App() {
  return (
    <>
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/" element={<AllRooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        
      </Routes>
      <Footer/>
    </Router>
 
      
      

    
    </>
  );
}

export default App;
