import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Footer from './components/Footer';
import Lottery from './components/Lottery';
import About from './components/About';

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/calculator' Component={Calculator} />
            <Route path='/lottery' Component={Lottery} />
            <Route path='/about' Component={About} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
