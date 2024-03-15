const DigitButton = ({ value, add}) => {
  return (
    <button className="calc-button" onClick={() => {add(value)}} type="button">
      {value}
    </button>
  )
}

export default DigitButton