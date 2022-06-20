import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const SiteNavbar = () => {
  return (
    <>
      <nav className='navbar site-navbar'>
        <ul>
          <li><Logo /></li>
          <li><NavLink activeclass='active' to='about'>About</NavLink></li>
          <li><NavLink activeclass='active' to='contact'>Countact</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to='/dashboard'>Login</NavLink></li>
          <li><NavLink to='false'>Register</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default SiteNavbar
