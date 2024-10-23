import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Login from './components/Login';
import Signup from './components/Signup';
import { auth } from './components/firebase';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null); // State for user details

  // Handle user state changes
  auth.onAuthStateChanged(user => {
    if (user) {
      setIsLoggedIn(true);
      setUserDetails({
        email: user.email,
        // Add other user details as needed
      });
    } else {
      setIsLoggedIn(false);
      setUserDetails(null);
    }
  });
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/' element={<Hero userDetails={userDetails} />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App;
