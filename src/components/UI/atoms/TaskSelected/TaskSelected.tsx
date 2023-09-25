interface TaskSelectedInterface {
  bugList: string[]
}

const TaskSelected = ({ bugList }: TaskSelectedInterface) => {
  const handleClipboard = () => {
    const bugText = bugList.join('\n\n')
    navigator.clipboard
      .writeText(bugText)
      .then(() => {
        alert('Texto copiado')
      })
      .catch(() => {
        alert('Ocurrio un error')
      })
  }

  return (
    <section className="flex flex-col justify-start">
      <div>
        <button
          className="bg-blue-400 mt-5 py-2 px-4 transition-all hover:bg-blue-500 flex flex-auto"
          onClick={handleClipboard}
        >
          Copiar en porta papeles
        </button>
      </div>
      <p className="text-left mt-10">
        {bugList.map((bug, index) => (
          <span key={`list-${index}`}>
            {bug}
            <br />
            <br />
          </span>
        ))}
      </p>
    </section>
  )
}

export default TaskSelected
