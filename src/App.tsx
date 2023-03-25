// import './App.css';
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

      <Home />

      <Footer />
    </div >
  );
}

export default App;