import * as React from 'react'

interface Props {
  text: string | undefined
}

const TodoItem: React.FC<Props> = ({text, children}) => {
  return (
    <div className=" p-3 flex justify-center h-16  border border-black">
      <input
        type="radio"
        className="ml-5 mr-2 my-auto h-4 w-4 border rounded-full cursor-pointer"
        id="todoCheckBox"
      />
      <span className="flex-grow w-16 my-auto ">{text}</span>
      <span className="my-auto">X</span>
    </div>
  )
}

export default TodoItem
