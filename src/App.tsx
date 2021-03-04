import * as React from 'react'
import Header from './components/Header'
import TodoBody from './components/TodoBody'

import {useTheme} from './hooks/useTheme'
const App: React.FC = () => {
  const [theme, setTheme] = useTheme()

  return (
    <div className="box-border">
      <div className="mx-auto">
        <Header theme={theme} handleThemeChange={setTheme} />
      </div>

      <TodoBody />
    </div>
  )
}

export default App
