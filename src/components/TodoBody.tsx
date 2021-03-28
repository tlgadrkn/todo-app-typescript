import * as React from 'react'
import TodoList from './TodoList'
import {useTodoContext} from '../context/todoContext'
import {State} from '../context/todoContext'

const TodoBody: React.FC = props => {
  const {state, dispatch} = useTodoContext()
  console.log(state)

  return (
    <div className="d-flex container w-1/2 border rounded -m-10 mx-auto bg-white">
      BODY
      <TodoList todos={state.todos} />
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
