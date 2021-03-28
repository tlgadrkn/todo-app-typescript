import * as React from 'react'
export type Todo = {
  id: number
  text: string
  active: boolean
}
export type State = {
  todos: Array<Todo>
}
type Action = {type: 'add_todo'; payload: Todo}

type Dispatch = (action: Action) => void
type TodoProviderProps = {children: React.ReactNode}

const initialState: State = {
  todos: [],
}

const TodoContext = React.createContext<
  {state: State; dispatch: Dispatch} | undefined
>(undefined)

function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add_todo':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    default:
      throw new Error(`Unhandled Action Type ${action.type}`)
  }
}

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
