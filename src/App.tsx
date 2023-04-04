// import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './Assets/Styles/index.scss';
import Navigation from './Components/Navbar';
import { Col, Collapse, Container, Nav, Navbar } from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';
import { Home } from './Pages/Home';
import { Footer } from './Components/Footer';
import { About } from './Pages/About';
import { Projects } from './Pages/Projects';
import { CV } from './Pages/CV';
import { Particles } from './Components/Particles';


function App() {
  return (
    <div className="App">
      <Particles />
      <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/cv' element={<CV />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Footer />
    </div >
  );
}

export default App;