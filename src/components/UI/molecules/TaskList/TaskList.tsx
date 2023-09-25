import { Task } from '@/types/tasks'
import { TaskCard } from '../../atoms/TaskCard'

interface TaskListInterface {
  taskList: Task[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeList: any
}

const TaskList = ({ taskList, changeList }: TaskListInterface) => {
  const handleCheck = (value: boolean, taskId: string) => {
    const tasks = taskList.map((task) => {
      if (task.id == taskId) {
        return {
          ...task,
          isChecked: value
        }
      }
      return task
    })
    changeList(tasks)
  }

  return (
    <ul>
      {taskList.map((task) => (
        <TaskCard key={task.id} task={task} changeList={handleCheck} />
      ))}
    </ul>
  )
}

export default TaskList
