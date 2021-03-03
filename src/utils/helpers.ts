export function userPrefersDark() {
  const userPrefersDark: boolean = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches
  return userPrefersDark
}

export function getHtmlElement(elementName: string) {
  const $element = window.document.querySelector(elementName)!
  return $element
}

export function addClassNameToElement(element: Element, className: string) {
  element.classList.add(className)
}
