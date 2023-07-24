import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import SignIn from './components/SignIn';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/services' exact element={<Services/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/login' exact element={<SignIn/>} />
      </Routes>
    </div>
  );
}

export default App;
