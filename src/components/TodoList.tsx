import React from 'react'
import {State} from '../context/todoContext'
import TodoItem from './TodoItem'

const TodoList: React.FC<State> = ({todos}) => {
  console.log(todos)

  return (
    <>
      {todos.length > 0 ? (
        todos.map(item => {
          return <TodoItem text={item.text}></TodoItem>
        })
      ) : (
        <p>NO TODOS TO SHOW</p>
      )}
    </>
  )
}

export default TodoList
