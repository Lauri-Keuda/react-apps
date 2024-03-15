import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Footer from './components/Footer';
import Lottery from './components/Lottery';
import About from './components/About';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path='/react-apps/' exact Component={Home} />
            <Route path='/react-apps/calculator' Component={Calculator} />
            <Route path='/react-apps/lottery' Component={Lottery} />
            <Route path='/react-apps/task-manager' Component={TaskManager} />
            <Route path='/react-apps/about' Component={About} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
