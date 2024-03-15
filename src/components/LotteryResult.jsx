const LotteryResult = ({ result }) => {
  return (
    <div className="lottery-result">
      {/* <p>Luvut: {`${result.numbers[0]} ${result.numbers[1]} ${result.numbers[2]} ${result.numbers[3]} ${result.numbers[4]} ${result.numbers[5]} ${result.numbers[6]}`}</p> */}
      <p>{result.specialNumber ? "Lisänumero oikein" : "Ei lisänumeroa"}</p>
      <p>Voitto: {result.winAmount} €</p>
      <p>Numbers right: {result.numbersRight}</p>
      <div className="lottery-result-border"></div>
    </div>
  )
}

export default LotteryResult