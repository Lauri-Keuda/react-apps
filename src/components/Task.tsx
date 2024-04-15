import { SlClose } from "react-icons/sl"
import { TaskType } from "../types"

const Task = ({ task, onDoubleClick, onDelete }: {task: TaskType, onDoubleClick: Function, onDelete: Function}) => {
  return (
    <div className={`task-container ${task.reminder && "reminder"}`} onDoubleClick={() => onDoubleClick(task.id)} >
      <h3>{task.name}
        <button onClick={() => onDelete(task.id)} type="button" className="task-delete">
          <SlClose/>
        </button>
      </h3>
      <p>{task.description}</p>
    </div>
  )
}

export default Task