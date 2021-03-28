import * as React from 'react'
import {useTodoContext} from '../context/todoContext'
export const TodoForm: React.FC = props => {
  const {dispatch} = useTodoContext()

  function handleFormSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    const $inputEl: HTMLInputElement | null = window.document.querySelector(
      '#todoInput',
    )
    const value: string | undefined = $inputEl?.value
    if (value && $inputEl) {
      $inputEl.value = ''
      dispatch({type: 'add_todo', payload: value})
    }
  }
  return (
    <form className="w-full flex justify-center" onSubmit={handleFormSubmit}>
      <input
        type="radio"
        className=" h-4 w-4 border rounded-full  my-auto cursor-pointer"
        id="todoCheckBox"
      />
      <input
        className="p-2 w-11/12  rounded text-gray-500 outline-none"
        type="text"
        id="todoInput"
        placeholder="Create a new todo..."
      ></input>
    </form>
  )
}
