import { FaTrashCan } from "react-icons/fa6";

const History = ({ history, clearHistory }) => {

  const content = history.map(item => {
    return (
      <div className="clac-history-calculation" key={item.id}>
        <p>{item.calculation}</p>
        <p className="clac-history-2row">= {item.equals}</p>
      </div>
    )
  })

  const noContent = <p className="calc-history-noContent">Nothing here.</p>

  return (
    <div className="calc-history">
      <div className="calc-history-top">
        <h3>History</h3>
        <FaTrashCan className="calc-history-clear" onClick={clearHistory}/>
      </div>
      <div className="calc-history-content">
        {history.length !== 0 ? content : noContent}
      </div>
    </div>
  )
}

export default History