import React from 'react'
import './App.css'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <div className="App box-border">
      <div className="container mx-auto">
        <Header />
      </div>
    </div>
  )
}

export default App
