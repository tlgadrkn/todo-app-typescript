import * as React from 'react'
import Header from './components/Header'

import {useTheme} from './hooks/useTheme'
const App: React.FC = () => {
  const theme = useTheme()

  return (
    <div className="container box-border">
      <div className="mx-auto">
        <Header />
      </div>
      <div>body</div>
    </div>
  )
}

export default App
