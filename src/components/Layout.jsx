// Layout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  const location = useLocation();

  // Define routes where the Navbar should not be displayed
  const hideNavbarRoutes = ['/signup', '/login'];

  return (
    <div>
      {/* Conditionally render Navbar based on the current route */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      {/* Render the main content of the page */}
      <Outlet />
    </div>
  );
};

export default Layout;
