const DigitButton = ({ value, add}: {value: string, add: Function}) => {
  return (
    <button className="calc-button" onClick={() => {add(value)}} type="button">
      {value}
    </button>
  )
}

export default DigitButton