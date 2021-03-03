import * as React from 'react'
import Header from './components/Header'

import {useTheme} from './hooks/useTheme'
const App: React.FC = () => {
  const [theme, setTheme] = useTheme()

  return (
    <div className="container box-border">
      <div className="mx-auto">
        <Header theme={theme!} />
      </div>
      <div>body</div>
    </div>
  )
}

export default App
