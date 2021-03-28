import {State, Action} from '../context/todoContext'

export function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add_todo':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            // change this to uuid
            id: Math.floor(Math.random() * 10000),
            text: action.payload,
            active: true,
          },
        ],
      }
    default:
      throw new Error(`Unhandled Action Type ${action.type}`)
  }
}
