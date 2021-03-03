import * as React from 'react'
import {
  userPrefersDark,
  addClassNameToElement,
  getHtmlElement,
} from '../utils/helpers'

export function useTheme(key?: string) {
  const [state, setState] = React.useState<'dark' | 'light'>(() => {
    const userPrefers: boolean = userPrefersDark()
    const theme: string | null = window.localStorage.getItem('theme')
    if (userPrefers && !theme) {
      return 'dark'
    }
    return theme ? JSON.parse(theme) : 'light'
  })

  React.useLayoutEffect(() => {
    const $html = getHtmlElement('html')
    addClassNameToElement($html, state!)
    window.localStorage.setItem('theme', JSON.stringify(state))
  })

  return [state, setState] as const
}
