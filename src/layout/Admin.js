import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../component/AdminNavbar';

const Admin = () => {
  return (
    <>
        <AdminNavbar />
        <main>
          <Outlet />
        </main>
    </>
  )
}

export default Admin
