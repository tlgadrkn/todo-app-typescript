import * as React from 'react'
import {todoReducer} from '../reducers/todoReducer'

export type Todo = {
  id: number
  text: string | undefined
  active: boolean
}
export type State = {
  todos: Array<Todo>
}
export type Action = {type: 'add_todo'; payload: string | undefined}

export type Dispatch = (action: Action) => void
type TodoProviderProps = {children: React.ReactNode}

const initialState: State = {
  todos: [],
}

const TodoContext = React.createContext<
  {state: State; dispatch: Dispatch} | undefined
>(undefined)

function TodoProvider({children}: TodoProviderProps) {
  const [state, dispatch] = React.useReducer(todoReducer, initialState)

  const value = {state, dispatch}
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

function useTodoContext() {
  const context = React.useContext(TodoContext)
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoProvider')
  }
  return context
}

export {TodoProvider, useTodoContext}
