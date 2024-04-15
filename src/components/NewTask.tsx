import { useState } from "react";

const NewTask = ({ onAdd }: {onAdd: Function}) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [reminder, setReminder] = useState(false)

  const submit = () => {
    if(!name){
      alert("Please, enter name of the task")
      return true
    }

    onAdd({ name, description, reminder})

    setName("")
    setDescription("")
    setReminder(false)
  }

  return (
    <div className="newTask-container">
      <header className="newTask-header">
        <h4>Add task</h4>
      </header>
      <form className="add-task" /* onSubmit={onSubmit} */>
        <div className="form-text">
          <label>Task name</label>
          <input
            type="text"
            placeholder="Task name here"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-text">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description here"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-checkbox">
          <label>Set reminder</label>
          <input
            className="checkbox"
            type="checkbox"
            title="Reminder"
            checked={reminder}
            onChange={(event) => setReminder(event.currentTarget.checked)}
          />
        </div>
        <input className="submit" type="button" value="Save task" onClick={submit}></input>
      </form>
    </div>
  )
}

export default NewTask