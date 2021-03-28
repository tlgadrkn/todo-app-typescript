import React from 'react'
import {State} from '../context/todoContext'

const TodoList: React.FC<State> = ({todos}) => {
  console.log(todos)

  return <>{todos.length > 0 ? <p>TODOS</p> : <p>NO TODOS TO SHOW</p>}</>
}

export default TodoList
