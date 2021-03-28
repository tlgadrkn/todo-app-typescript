import * as React from 'react'
import Header from './components/Header/Header'
import TodoBody from './components/TodoBody'
import {useTheme} from './hooks/useTheme'
import {TodoProvider} from './context/todoContext'

const App: React.FC = () => {
  const [theme, setTheme] = useTheme()

  return (
    <TodoProvider>
      <div className="box-border">
        <div className="mx-auto">
          <Header theme={theme} handleThemeChange={setTheme} />
        </div>
        <TodoBody />
      </div>
    </TodoProvider>
  )
}

export default App
