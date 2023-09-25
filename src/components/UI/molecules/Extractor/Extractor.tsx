import { SetStateAction, useState } from 'react'
import { TextArea } from '../../atoms/TextArea'

interface ExtratorInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createList: any
}

const Extractor = ({ createList }: ExtratorInterface) => {
  const [bugsText, setBugsText] = useState('')

  const splitText = () => {
    const splited = bugsText
      .split(/\n\s*\n/)
      .map((bloque) => bloque.replace(/\s*\n\s*/g, ' ').trim())

    createList(splited)
  }

  return (
    <section className="flex flex-col">
      <TextArea
        value={bugsText}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setBugsText(e.target.value)
        }
      />
      <button
        className="bg-blue-400 mt-5 py-2 px-4 transition-all hover:bg-blue-500 "
        onClick={splitText}
      >
        Extraer
      </button>
    </section>
  )
}

export default Extractor
