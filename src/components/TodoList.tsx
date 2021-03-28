import React from 'react'
import {Todos as TodoStateInterface} from '../App'

const TodoList: React.FC<TodoStateInterface> = props => {
  const {todos} = props
  console.log(todos)

  return <>{todos.all.length > 0 ? <p>TODOS</p> : <p>NO TODOS TO SHOW</p>}</>
}

export default TodoList
