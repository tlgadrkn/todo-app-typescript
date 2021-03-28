import * as React from 'react'
import TodoList from './TodoList'
import {State} from '../context/todoContext'

const TodoBody: React.FC<State> = ({todos}) => {
  return (
    <div className="flex container flex-col w-1/2 border rounded -m-10 mx-auto bg-white">
      <TodoList todos={todos} />
      <div className="flex flex-row">
        <div className="flex justify-items-center justify-between">
          {todos.length > 0 ? (
            <span>{todos.length} items left</span>
          ) : (
            <span>No items left</span>
          )}

          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoBody
