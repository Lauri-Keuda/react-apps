const OperationButton = ({ value, operate }: {value: string, operate: Function}) => {
  return (
    <button className={`calc-button${value === "=" ? " span2" : ""}`} onClick={() => {operate(value)}}  type="button">
      {value}
    </button>
  )
}

export default OperationButton