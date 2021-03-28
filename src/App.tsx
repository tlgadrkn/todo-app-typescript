import * as React from 'react'
import Header from './components/Header/Header'
import TodoBody from './components/TodoBody'
import {useTheme} from './hooks/useTheme'

export interface Todos {
  todos: {
    all: string[]
    completed?: string[]
    incompleted?: string[]
    active?: string[]
  }
}

const App: React.FC = () => {
  const [state, setState] = React.useState(() => {
    const todos: Todos = {
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
        <Header theme={theme} handleThemeChange={setTheme} />
      </div>
      <TodoBody {...state} />
    </div>
  )
}

export default App
