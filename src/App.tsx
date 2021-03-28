import * as React from 'react'
import Header from './components/Header/Header'
import TodoBody from './components/TodoBody'
import {useTheme} from './hooks/useTheme'
import {useTodoContext} from './context/todoContext'

const App: React.FC = () => {
  const {state, dispatch} = useTodoContext()
  const [theme, setTheme] = useTheme()
  console.log(state)

  return (
    <div className="box-border">
      <div className="mx-auto">
        <Header theme={theme} handleThemeChange={setTheme} />
      </div>
      <TodoBody todos={state.todos} />
    </div>
  )
}

export default App
