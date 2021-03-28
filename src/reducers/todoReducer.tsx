import {State, Action} from '../context/todoContext'

export function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add_todo':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    default:
      throw new Error(`Unhandled Action Type ${action.type}`)
  }
}
