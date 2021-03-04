import * as React from 'react'

interface Props {
  addTodo: React.Dispatch<React.SetStateAction<object>>
}

export const TodoForm: React.FC<Props> = ({addTodo}) => {
  function handleFormSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    const $inputEl: HTMLInputElement | null = window.document.querySelector(
      '#todoInput',
    )
    const value: string | undefined = $inputEl?.value
    if ($inputEl) {
      $inputEl.value = ''
      // change this to real
      addTodo({value})
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
