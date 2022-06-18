import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='navbar'>
          <NavLink activeclass='active' to='/'>Home</NavLink>
          <NavLink activeclass='active' to='/about'>About</NavLink>
          <NavLink activeclass='active' to='/contact'>Countact</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
