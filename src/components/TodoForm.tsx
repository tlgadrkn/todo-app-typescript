import * as React from 'react'

export const TodoForm: React.FC = () => {
  return (
    <form>
      <input type="checkbox" className="rounded h-4 w-4" />
      <input
        className="p-2"
        type="text"
        placeholder="Create a new todo..."
      ></input>
    </form>
  )
}
