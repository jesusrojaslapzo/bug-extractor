interface TextAreaProps {
  value: string
  onChange: any
}

const TextArea = ({ value, onChange }: TextAreaProps) => {
  return (
    <textarea
      placeholder="Agrega aqui los bugs"
      className="w-[500px] h-80 px-4 py-2 rounded-lg"
      value={value}
      onChange={onChange}
    />
  )
}

export default TextArea
