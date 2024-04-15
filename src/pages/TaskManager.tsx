import { useState } from "react"
import NewTask from "../components/NewTask"
import Tasks from "../components/Tasks"
import { TaskType } from "../types"

const TaskManager = () => {
  const [ tasks, setTasks ] = useState<TaskType[]>([
    {
      id: 0,
      name: "Lounas",
      description: "Syö lounas oikeaan aikaan",
      reminder: true
    },
    {
      id: 1,
      name: "Otsikko",
      description: "Lisätietoja tehtävästä",
      reminder: false
    },
    {
      id: 2,
      name: "Käy kaupassa",
      description: "Käy kaupassa tekemässä ostokset",
      reminder: false
    },
    {
      id: 3,
      name: "Do this task",
      description: "This is important task! Dont forget to do this!",
      reminder: true
    },
    {
      id: 4,
      name: "Add more tasks here",
      description: "Add more example tasks here",
      reminder: false
    }
  ])

  //delete task
  const deleteTask = (id: number) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  //toggle reminder
  const toggleReminder = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if(task.id === id){
          return {...task, reminder: !task.reminder}
        } else {
          return task
        }
      })
    )
  }

  //add task
  const addTask = (task: TaskType) => {
    const newId: number = Math.floor(Math.random() * 10000) + 1
    const newTask = { newId, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <>
    <div className="tasks-container">
      {tasks.length > 0 ? (
        <Tasks
        tasks={tasks}
        onDoubleClick={toggleReminder}
        onDelete={deleteTask}
        />
        ) : (
          <div className="no-tasks">
          <h4>No tasks to show</h4>
        </div>
      )}
    </div>
    <NewTask onAdd={addTask}/>
    </>
  )
}

export default TaskManager