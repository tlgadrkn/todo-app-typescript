import {url} from 'inspector'
import * as React from 'react'
import {MoonIcon} from '../icons/MoonIcon'
import {TodoForm} from './TodoForm'
const Header: React.FC = () => {
  return (
    <div className="flex-none justify-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 header w-screen h-64	">
      <div className="flex flex-row mx-auto justify-between content-center items-center w-1/2 border-black border-solid p-4 ">
        <h1 className="text-white text-5xl">TODO</h1>
        <button>
          <MoonIcon />
        </button>
      </div>
      <div className="p-4 flex flex-row justify-center">
        <TodoForm />
      </div>
    </div>
  )
}

export default Header
