import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
        <span title='Go to home' className="logo"><Link to='/'>my logo</Link></span>
    </>
  )
}

export default Logo
