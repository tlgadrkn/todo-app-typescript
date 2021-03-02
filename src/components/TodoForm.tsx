import * as React from 'react'

export const TodoForm: React.FC = () => {
  return (
    <form className="w-full flex justify-center">
      <input
        type="radio"
        className=" h-4 w-4 border rounded-full  my-auto cursor-pointer"
      />
      <input
        className="p-2 w-11/12  rounded text-gray-500 outline-none"
        type="text"
        placeholder="Create a new todo..."
      ></input>
    </form>
  )
}
