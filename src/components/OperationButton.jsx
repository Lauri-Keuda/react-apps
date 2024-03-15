const OperationButton = ({ value, operate}) => {
  return (
    <button className={`calc-button${value === "=" ? " span2" : ""}`} onClick={() => {operate(value)}}  type="button">
      {value}
    </button>
  )
}

export default OperationButton