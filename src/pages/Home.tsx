import { Link } from "react-router-dom"
import calcImg from "../images/calculator.png"
import timeNowImg from "../images/time-now.png"
import lotteryImg from "../images/lottery.png"
import taskManagerImg from "../images/task-manager.png"

const Home = () => {
  return (
    <div className="home-container">
      <div className="card-container">
        <h3 className="card-header">Calculator</h3>
        <p>Basic calculator</p>
        <Link className="card-link" to="/react-apps/calculator">Open</Link>
        <img className="card-image" src={calcImg} alt="calculator"/>
      </div>
      <div className="card-container">
        <h3 className="card-header">Lottery</h3>
        <p>Game of Lottery</p>
        <Link className="card-link" to="/react-apps/lottery">Open</Link>
        <img className="card-image" src={lotteryImg} alt="lottery"/>
      </div>
      <div className="card-container">
        <h3 className="card-header">Task manager</h3>
        <p>Simple task manager tool</p>
        <Link className="card-link" to="/react-apps/task-manager">Open</Link>
        <img className="card-image" src={taskManagerImg} alt="task manager"/>
      </div>
      <div className="card-container">
        <h3 className="card-header">Time now</h3>
        <p>Check waht time it is in different capital cities</p>
        <Link className="card-link" to="/react-apps/time-now">Open</Link>
        <img className="card-image" src={timeNowImg} alt="calculator"/>
      </div>
    </div>
  )
}

export default Home