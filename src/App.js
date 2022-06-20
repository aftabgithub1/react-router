import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Site from './layout/Site';
import Admin from './layout/Admin';
import Home from './pages/site/Home';
import About from './pages/site/About';
import Contact from './pages/site/Contact';
import ErrPage from './pages/site/ErrPage';
import Dashboard from './pages/admin/Dashboard';
import User from './pages/admin/User';

function App() {

  return (
    <Router basename='/react-router'>
      <Routes>
        <Route path='/' element={<Site />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<ErrPage />} />
        </Route>
        <Route path='/' element={<Admin />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='user' element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
