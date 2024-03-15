const LotteryRow = ({ rowID, numChange }) => {

  return (
    <div className="lottery-row">
      <label className="lottery-row-header">Row {rowID + 1}</label>
      <div className="lottery-inputs">
        <input className="lottery-input" onChange={e => numChange(e, 0, rowID)} type="number" defaultValue="null" min={1} max={40}></input>
        <input className="lottery-input" onChange={e => numChange(e, 1, rowID)} type="number" defaultValue="null" min={1} max={40}></input>
        <input className="lottery-input" onChange={e => numChange(e, 2, rowID)} type="number" defaultValue="null" min={1} max={40}></input>
        <input className="lottery-input" onChange={e => numChange(e, 3, rowID)} type="number" defaultValue="null" min={1} max={40}></input>
        <input className="lottery-input" onChange={e => numChange(e, 4, rowID)} type="number" defaultValue="null" min={1} max={40}></input>
        <input className="lottery-input" onChange={e => numChange(e, 5, rowID)} type="number" defaultValue="null" min={1} max={40}></input>
        <input className="lottery-input" onChange={e => numChange(e, 6, rowID)} type="number" defaultValue="null" min={1} max={40}></input>
      </div>
    </div>
  )
}

export default LotteryRow