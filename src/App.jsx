import {Routes, Route} from 'react-router-dom'
import './App.css';

/* components */
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

/* page components */
import LandingPage from './pages/LandingPage/LandingPage';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage/> } />
        <Route path='/about-me' element={<AboutMe/> } />
        <Route path='/projects' element={<Projects/> } />
        <Route path='/resume' element={<Resume/> } />
        <Route path='/contact' element={<Contact/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
