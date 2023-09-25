import { Task } from '@/types/tasks'

interface TaskCardInterface {
  task: Task
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeList: any
}

const TaskCard = ({ task, changeList }: TaskCardInterface) => {
  return (
    <li className="bg-gray-900 text-white rounded-lg mb-6 py-4 px-2 text-left">
      <label className="grid grid-cols-[1fr_40fr] items-center cursor-pointer">
        <input
          type="checkbox"
          className="w-5 h-5 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => changeList(e.target.checked, task.id)}
        />
        {task.name}
      </label>
    </li>
  )
}

export default TaskCard
