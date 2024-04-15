import Task from "./Task"
import { TaskType } from "../types"

const Tasks = ({ tasks, onDoubleClick, onDelete }: {tasks: TaskType[], onDoubleClick: Function, onDelete: Function}) => {
  return (
    <>
      {tasks.map((task) => {
        return <Task
          key={task.id}
          task={task}
          onDoubleClick={onDoubleClick}
          onDelete={onDelete}
        />
      })}
    </>
  )
}

export default Tasks