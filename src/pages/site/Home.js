import React from 'react'
import Logo from '../../component/Logo';

const Home = () => {
  document.title = 'React Router';

  return (
    <div>
      <h1>Home</h1>
      <div className='home-logo x3'><Logo /></div>
    </div>
  )
}

export default Home
