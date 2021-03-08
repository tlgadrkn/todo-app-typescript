import * as React from 'react'
import Header from './components/Header'
import TodoBody from './components/TodoBody'
import {useTheme} from './hooks/useTheme'

interface Todos {
  todos?: {
    all?: string[]
    completed?: string[]
    incompleted?: string[]
    active?: string[]
  }
}

const App: React.FC<Todos> = () => {
  const [state, setState] = React.useState(() => {
    const todos: {} = {
      todos: {
        all: [],
        completed: [],
        incompleted: [],
        active: [],
      },
    }
    return todos
  })
  const [theme, setTheme] = useTheme()
  console.log(state)
  return (
    <div className="box-border">
      <div className="mx-auto">
        <Header theme={theme} handleThemeChange={setTheme} addTodo={setState} />
      </div>
      <TodoBody todos={state} />
    </div>
  )
}

export default App
