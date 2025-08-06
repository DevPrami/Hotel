import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import HotelRej from "./components/HotelRej";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {false && <HotelRej />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<Layout />} >
              <Route index element={<Dashboard/>} />
               <Route path="add-room" element={<AddRoom/>} />
                <Route path="list-room" element={<ListRoom/>} />
          </Route>
          <Route />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
