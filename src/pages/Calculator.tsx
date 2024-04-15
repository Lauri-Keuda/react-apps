import { useState } from 'react';
import DigitButton from '../components/DigitButton';
import OperationButton from '../components/OperationButton';
import History from '../components/History';
import ToggleHistory from '../components/ToggleHistory';
import { historyItemType } from '../types';

const Calculator = () => {

  const [mainNum, setMainNum] = useState("0")
  const [secondNum, setSecondNum] = useState("")
  const [operationSign, setOperationSign] = useState("")
  const [history, setHistory] = useState<historyItemType[]>([])
  const [calculation, setCalculation] = useState("")
  const [showHistory, setShowHistory] = useState(false)

  function insertNum(number: string){

    if(mainNum === "0" || mainNum === "-0"){
      setMainNum(number.toString())
      return
    }

    number = mainNum + number
    setMainNum(number)
  }

  function addDecimal(dot: string) {
    if(mainNum.includes(".")){return}

    setMainNum(mainNum + dot)
  }

  function calculate(sign: string): number | string {
    switch(sign) {
      case "+":
        return parseFloat(secondNum) + parseFloat(mainNum)
      case "-":
        return parseFloat(secondNum) - parseFloat(mainNum)
      case "×":
        return parseFloat(secondNum) * parseFloat(mainNum)
      case "÷":
        return parseFloat(secondNum) / parseFloat(mainNum)
      default:
        return ""
    }
  }

  function operate(sign: string){
    switch(sign){
      case "C":
        setMainNum("0")
        setSecondNum("")
        setOperationSign("")
        setCalculation("")
        break;
      case "←":
        if(mainNum === "0"){break}

        if(mainNum.length <= 1){
          setMainNum("0")
          break
        }

        setMainNum(mainNum.slice(0, -1).toString())
        break;
      case "+":
      case "-":
      case "×":
      case "÷":
        if(calculation[calculation.length - 1] === "=") {
          setCalculation(mainNum)
        } else {
          setCalculation(calculation + " " + operationSign + " " + mainNum)
        }

        if(operationSign === ""){
          setSecondNum(mainNum)
          setOperationSign(sign)
          setMainNum("0")
        } else {
          setSecondNum(calculate(operationSign).toString())
          setOperationSign(sign)
          setMainNum("0")
        }
        break;
      case "=":
        if(secondNum === "" || operationSign === ""){break}
        const fullCalculation = calculation + " " + operationSign + " " + mainNum + " ="

        setHistory([...history, {
          id: history.length + 1,
          calculation: fullCalculation.slice(0, -1),
          equals: calculate(operationSign).toString()
        }])

        setCalculation(fullCalculation)
        setMainNum(calculate(operationSign).toString())
        setSecondNum(fullCalculation)
        setOperationSign("")
        break;
      case "±":
        setMainNum((parseFloat(mainNum) * -1).toString())
        break;
      default:
        break;
    }
  }

  function toggleHistory() {
    setShowHistory(!showHistory)
  }

  const clearHistory = () => {
    setHistory([])
  }

  return (
    <>
    <div className='calc-grid'>
      <div className="calc-display">
        <p className='calc-display-secondary'>{secondNum} {operationSign}</p>
        <p className='calc-display-main'>{mainNum}</p>
      </div>
      <OperationButton value="±" operate={operate}/>
      <OperationButton value="C" operate={operate}/>
      <OperationButton value="←" operate={operate}/>
      <OperationButton value="÷" operate={operate}/>
      <DigitButton value="1" add={insertNum}/>
      <DigitButton value="2" add={insertNum}/>
      <DigitButton value="3" add={insertNum}/>
      <OperationButton value="×" operate={operate}/>
      <DigitButton value="4" add={insertNum}/>
      <DigitButton value="5" add={insertNum}/>
      <DigitButton value="6" add={insertNum}/>
      <OperationButton value="+" operate={operate}/>
      <DigitButton value="7" add={insertNum}/>
      <DigitButton value="8" add={insertNum}/>
      <DigitButton value="9" add={insertNum}/>
      <OperationButton value="-" operate={operate}/>
      <DigitButton value="." add={addDecimal}/>
      <DigitButton value="0" add={insertNum}/>
      <OperationButton value="=" operate={operate}/>
    </div>
    {showHistory ? <History history={history} clearHistory={clearHistory}/> : ""}
    <ToggleHistory toggleHistory={toggleHistory}/>
    </>
  )
}

export default Calculator