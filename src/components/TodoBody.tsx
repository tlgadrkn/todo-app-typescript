import * as React from 'react'
import TodoList from './TodoList'

interface Todos {
  todos: {
    all?: string[]
    completed?: string[]
    incompleted?: string[]
    active?: string[]
  }
}
const TodoBody: React.FC<Todos> = ({todos}) => {
  return (
    <div className="d-flex container w-1/2 border rounded -m-10 mx-auto bg-white">
      BODY
      <TodoList todos={todos} />
      <div className="d-flex flex-row">
        <div className="d-flex justify-items-center justify-between">
          <span>2 items left</span>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
          <button>Clear Completed</button>
        </div>
      </div>
    </div>
  )
}

export default TodoBody
