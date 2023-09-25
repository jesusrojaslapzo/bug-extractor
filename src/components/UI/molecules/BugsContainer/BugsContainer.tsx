import { useCallback, useState } from 'react'
import { Extractor } from '../Extractor'
import { v4 as uuid } from 'uuid'
import { Task } from '@/types/tasks'
import { TaskList } from '../TaskList'
import { TaskSelected } from '../../atoms/TaskSelected'

const BugsContainer = () => {
  const [taskList, setTaskList] = useState<Task[]>([])
  const [bugList, setBugList] = useState<string[]>([])

  const createList = useCallback((listExtracted: string[]) => {
    const tasks = listExtracted.map((bug) => ({
      id: uuid(),
      name: bug,
      isChecked: false
    }))
    setTaskList(tasks)
  }, [])

  const handleBugs = useCallback(() => {
    const bugsSelected = taskList
      .filter((task) => task.isChecked)
      .map((task) => task.name)
    setBugList(bugsSelected)
  }, [taskList])

  return (
    <section>
      {taskList.length === 0 && <Extractor createList={createList} />}
      {taskList.length > 0 && bugList.length === 0 && (
        <>
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-xl">Selecciona los bugs</h2>
            <button
              className="bg-blue-400 mt-5 py-2 px-4 transition-all hover:bg-blue-500 fixed bottom-10 right-28"
              onClick={handleBugs}
            >
              Confirmar
            </button>
          </header>

          <TaskList taskList={taskList} changeList={setTaskList} />
        </>
      )}
      {bugList.length > 0 && <TaskSelected bugList={bugList} />}
    </section>
  )
}

export default BugsContainer
