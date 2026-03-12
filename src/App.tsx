import './App.css'
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="https://discord.com/invite/cW9788YUmv">Join Discord</Link>
          </li>
          <li>
            <Link to="https://instagram.com/livecode.la">Follow on Instagram</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
