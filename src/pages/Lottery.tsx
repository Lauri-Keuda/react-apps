import LotteryRow from "../components/LotteryRow";
import LotteryResult from "../components/LotteryResult";
import { ChangeEvent, useEffect, useState } from "react";
import { ResultType } from "../types";

const Lottery = () => {
  const emptyRow = [0, 0, 0, 0, 0, 0, 0];
  const [winNumbers, setWinNumbers] = useState([-1, -1, -1, -1, -1, -1, -1, -1])
  const [userRows, setUserRows] = useState([emptyRow, emptyRow, emptyRow, emptyRow, emptyRow, emptyRow, emptyRow])
  const emptyResult: ResultType = {
    numbers: emptyRow,
    specialNumber: false,
    winAmount: 0,
    numbersRight: 0
  }
  const [results, setResults] = useState([emptyResult, emptyResult, emptyResult, emptyResult, emptyResult])
  const [total, setTotal] = useState(0)
  const [showWinNumbers, setShowWinNumbers] = useState(true)

  useEffect(() => {
    let numbers: number[] = [];
    for(let i = 0; i < 8; i++) {// arvotaan luku 8 kertaa
      let r = Math.floor((Math.random() * 40) + 1); //satunnainen luku: pienin 1, suurin 40

      if(!numbers.includes(r)){
        numbers.push(r)
      } else {
        i--; //laittaa for-lauseen arpomaan luvun uudestaan
      }
    }

    setTotal(0);
    setWinNumbers(numbers);
  },[])

  useEffect(() => {
    setTotal(results[0].winAmount + results[1].winAmount + results[2].winAmount + results[3].winAmount + results[4].winAmount)
  },[results])

  function newNumbers() {
    let numbers: number[] = [];
    for(let i = 0; i < 8; i++) {// arvotaan luku 8 kertaa
      let r = Math.floor((Math.random() * 40) + 1); //satunnainen luku: pienin 1, suurin 40

      if(!numbers.includes(r)){
        numbers.push(r)
      } else {
        i--; //laittaa for-lauseen arpomaan luvun uudestaan
      }
    }

    setTotal(0);
    setWinNumbers(numbers);
    submitRows();
  }

  function setNum(e: ChangeEvent<HTMLInputElement>, index: number, rowID: number) {

    setUserRows(userRows.map((item: number[], i: number) => {
      if(i === rowID){
        return userRows[rowID].map((item: number, i: number) => {
          if(i === index) {
            return(parseInt(e.target.value))
          } else {
            return item
          }
        })
      } else {
        return item
      }
    }))

    //console.log(userRows)
  }

  function checkRow(row: number[], index: number) {
    let numsRight = 0;
    let specialNum = false;
    let winAmount = 0;

    for(let i = 0; i < 7; i++) {
      if (winNumbers.includes(row[i]) && row[i] !== winNumbers[7]) {
        numsRight += 1;
      }
    }

    if(row.includes(winNumbers[7])){
      specialNum = true;
    }

    switch(numsRight){
      case 7:
        winAmount = 1000000
        break;
      case 6:
        if(specialNum){
          winAmount = 100000
        } else {
          winAmount = 2000
        }
        break;
      case 5:
        winAmount = 50
        break;
      case 4:
        winAmount = 10
        break;
      case 3:
        if(specialNum){
          winAmount = 2
        }
        break;
      default:
        break;
    }

    //console.log(specialNum + "..." + winAmount + "..." + row)
    return {
      numbers: [...row],
      specialNumber: specialNum,
      winAmount: winAmount,
      numbersRight: numsRight
    }
  }


  function submitRows(){
    setResults([checkRow(userRows[0], 0), checkRow(userRows[1], 1), checkRow(userRows[2], 2), checkRow(userRows[3], 3), checkRow(userRows[4], 4)])

    //console.log("Rows submited")
    //console.log(results)
  }

  function changeShowWinNumbers() {
    setShowWinNumbers(!showWinNumbers)
  }

  return (
    <div className="lottery-container">
      <div className="lottery-header-container">
        <h2 className="lottery-header">Lottery</h2>
      </div>
      <LotteryRow rowID={0} numChange={setNum}/>
      <LotteryRow rowID={1} numChange={setNum}/>
      <LotteryRow rowID={2} numChange={setNum}/>
      <LotteryRow rowID={3} numChange={setNum}/>
      <LotteryRow rowID={4} numChange={setNum}/>
      <LotteryResult result={results[0]}/>
      <LotteryResult result={results[1]}/>
      <LotteryResult result={results[2]}/>
      <LotteryResult result={results[3]}/>
      <LotteryResult result={results[4]}/>
      <div className="lottery-buttons lottery-lastrow">
        <button onClick={newNumbers} type="button">Get new numbers</button>
        <button onClick={submitRows} type="button">Submit rows</button>
      </div>
      <h3 className="lottery-win lottery-lastrow">Total: {total} €</h3>
        <button className="lottery-win-numbers" type="button" onClick={changeShowWinNumbers}>{ showWinNumbers ? "Show win numbers" : `Win numbers: ${winNumbers[0]}-${winNumbers[1]}-${winNumbers[2]}-${winNumbers[3]}-${winNumbers[4]}-${winNumbers[5]}-${winNumbers[6]}-(${winNumbers[7]})`}</button>
    </div>
  )
}//<p style={{gridColumn:"span 2"}}>{`Win numbers: ${winNumbers[0]}-${winNumbers[1]}-${winNumbers[2]}-${winNumbers[3]}-${winNumbers[4]}-${winNumbers[5]}-${winNumbers[6]}-(${winNumbers[7]})`}</p>

export default Lottery