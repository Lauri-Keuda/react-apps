import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("/react-apps");

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="sidebar-container">
      <h2 className="sidebar-header">Menu</h2>
      <ul className="sidebar-items">
        <Link id='sidebar-a' className='link' to="/react-apps"> {currentPage === "/react-apps" && "►"} Home</Link>
        <Link className='link' to="/react-apps/calculator"> {currentPage === "/react-apps/calculator" && "►"} Calculator</Link>
        <Link className='link' to="/react-apps/lottery"> {currentPage === "/react-apps/lottery" && "►"} Lottery</Link>
        <Link className='link' to="/react-apps/task-manager"> {currentPage === "/react-apps/task-manager" && "►"} Task manager</Link>
        <Link className='link' to="/react-apps/time-now"> {currentPage === "/react-apps/time-now" && "►"} Time now</Link>
        <Link className='link' to="/react-apps/about"> {currentPage === "/react-apps/about" && "►"} About</Link>
      </ul>
    </div>
  )
}

export default Sidebar