import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const AdminNavbar = () => {
  return (
    <>
      <nav className='navbar admin-navbar'>
        <ul>
          <li>
            <Logo />
          </li>
          <li>
            <NavLink activeclass='active' to='dashboard'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink activeclass='active' to='user'>User</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default AdminNavbar
