import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      {/* <LandingPage/> */}
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
