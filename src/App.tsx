import logo from './logo.svg';
// import './App.css';
import './Assets/Styles/index.scss';
import Navigation from './Components/Navbar';
import { Button } from 'react-bootstrap';

function App() {
  return (
      <div className="App">
        <Navigation/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        <Button>Klick</Button>
        </header>
      </div>
  );
}

export default App;
