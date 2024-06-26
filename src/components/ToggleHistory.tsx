import { FaHistory } from "react-icons/fa";

const ToggleHistory = ({ toggleHistory }: {toggleHistory: Function}) => {
  return (
    <button className="calc-historyBtn" onClick={() => toggleHistory()} title="show history">
      <FaHistory/>
    </button>
  )
}

export default ToggleHistory