import { Link } from "react-router-dom"
import calcImg from "../images/calculator.png"
import placeholderImg from "../images/placeholder.png"

const Home = () => {
  return (
    <div className="home-container">
      <div className="card-container">
        <h3 className="card-header">Calculator</h3>
        <img className="card-image" src={calcImg} alt="calculator"/>
        <Link className="card-link" to="/calculator">Open</Link>
      </div>
      <div className="card-container">
        <h3 className="card-header">Placeholder</h3>
        <img className="card-image" src={placeholderImg} alt="calculator"/>
        <Link className="card-link" to="/">Open</Link>
      </div>
      <div className="card-container">
        <h3 className="card-header">Placeholder</h3>
        <img className="card-image" src={placeholderImg} alt="calculator"/>
        <Link className="card-link" to="/">Open</Link>
      </div>
      <div className="card-container">
        <h3 className="card-header">Placeholder</h3>
        <img className="card-image" src={placeholderImg} alt="calculator"/>
        <Link className="card-link" to="/">Open</Link>
      </div>
    </div>
  )
}

export default Home