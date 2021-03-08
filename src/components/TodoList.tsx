import React from 'react'

interface Todos {
  todos: {
    all?: string[]
    completed?: string[]
    incompleted?: string[]
    active?: string[]
  }
}
const TodoList: React.FC<Todos> = props => {
  const {todos} = props
  console.log(todos)

  return <>{todos > 0 ? <p>TODOS</p> : <p>NO TODOS TO SHOW</p>}</>
}

export default TodoList
