// import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './Assets/Styles/index.scss';
import Navigation from './Components/Navbar';
import { Col, Collapse, Container, Nav, Navbar } from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';
import { Home } from './Pages/Home';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Home />} />
          <Route path='/projects' element={<Home />} />
          <Route path='/cv' element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Footer />
    </div >
  );
}

export default App;