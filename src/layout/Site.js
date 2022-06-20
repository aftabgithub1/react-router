import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/SiteNavbar';

const Site = () => {
  return (
    <>
        <Navbar />
        <main>
          <Outlet />
        </main>
    </>
  )
}

export default Site
