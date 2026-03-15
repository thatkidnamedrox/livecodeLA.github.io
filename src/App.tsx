
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { pages } from './components/NavBar';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar pages={pages} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
