// import './App.css';
import './Assets/Styles/index.scss';
import Navigation from './Components/Navbar';
import { Button, Col, Container, Nav, Navbar } from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';
import { ImProfile } from 'react-icons/im';
import { MdPersonOutline, MdCode } from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <Container>
          <Row>
            <Col md={7}>
              Text
            </Col>
            <Col md={5}>
              Image
            </Col>
          </Row>
        </Container>


        {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <Button>Klick</Button> */}
      </header>
      <footer>
        <Navbar bg='dark' variant='dark' sticky='top' className='px-3'>
          <Container>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <a href='https://www.buymeacoffee.com/Prommerbua'>
                  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" width="150"></img>
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </footer>
    </div>
  );
}

export default App;
