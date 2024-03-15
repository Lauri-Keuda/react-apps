import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="sidebar-container">
      <h2 className="sidebar-header">Menu</h2>
      <ul className="sidebar-items">
        <Link id='sidebar-a' className='link' to="/"> {currentPage === "/" && "►"} Home</Link>
        <Link className='link' to="/calculator"> {currentPage === "/calculator" && "►"} Calculator</Link>
        <Link className='link' to="/lottery"> {currentPage === "/lottery" && "►"} Lottery</Link>
        <Link className='link' to="/about"> {currentPage === "/about" && "►"} About</Link>
      </ul>
    </div>
  )
}

export default Sidebar