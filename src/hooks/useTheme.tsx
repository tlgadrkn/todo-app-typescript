import * as React from 'react'
import {userPrefersDark} from '../utils/helpers'

export function useTheme(key?: string) {
  const [state, setState] = React.useState<null | string>(() => {
    const userPrefers: boolean = userPrefersDark()
    const theme: string | null = window.localStorage.getItem('theme')
    console.log(userPrefers)

    if (userPrefers && !theme) {
      return 'dark'
    }

    return theme ? JSON.parse(theme) : 'light'
  })

  React.useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(state))
  })

  return [state, setState]
}
