// import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom'
import './Assets/Styles/index.scss';
import Navigation from './Components/Navbar';
import { Home } from './Pages/Home';
import { Footer } from './Components/Footer';
import { About } from './Pages/About';
import { Projects } from './Pages/Projects';
import { CV } from './Pages/CV';
import { Particles } from './Components/Particles';
import { Suspense } from 'react';
import { Loading } from './Components/Loading';


function App() {
  return (
    <div className="App">
      <Particles />
      <Navigation />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/cv' element={<CV />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Footer />
    </div >
  );
}

export default App;