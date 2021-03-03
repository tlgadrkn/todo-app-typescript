export function userPrefersDark() {
  const userPrefersDark: boolean = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches
  return userPrefersDark
}
