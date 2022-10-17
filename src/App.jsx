import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage/> } />
        <Route path='/resume' element={<Resume/> } />
        <Route path='/contact' element={<Contact/> } />
      </Routes>
      {/* */}
      <Footer/>
    </div>
  );
}

export default App;
