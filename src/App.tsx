import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Footer from './components/Footer';
import Lottery from './pages/Lottery';
import About from './pages/About';
import TaskManager from './pages/TaskManager';
import TimeNow from './pages/TimeNow';

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path='/react-apps' Component={Home} />
            <Route path='/react-apps/calculator' Component={Calculator} />
            <Route path='/react-apps/lottery' Component={Lottery} />
            <Route path='/react-apps/task-manager' Component={TaskManager} />
            <Route path='/react-apps/about' Component={About} />
            <Route path='/react-apps/time-now' Component={TimeNow} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
