import * as React from 'react'
import {MoonIcon} from '../icons/MoonIcon'
import {SunIcon} from '../icons/SunIcon'
import {TodoForm} from './TodoForm'
import img from '../assets/images/bg-desktop-light.jpg'

const Header: React.FC = () => {
  return (
    <div
      className="flex-none justify-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 header w-screen h-72 bg-no-repeat bg-cover"
      style={{backgroundImage: `url(${img})`}}
    >
      <div className="flex flex-row mx-auto justify-between content-center items-center w-1/2  border-black border-solid py-14 ">
        <h1 className="text-white text-5xl font-semibold	tracking-widest">
          TODO
        </h1>
        <button>
          <MoonIcon />
        </button>
      </div>
      <div className="p-4 flex flex-row justify-center h-16 w-1/2 mx-auto bg-white rounded">
        <TodoForm />
      </div>
    </div>
  )
}

export default Header
