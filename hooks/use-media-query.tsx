import * as React from "react"

export function useMediaQuery(query: string, defaultValue = false) {
  const [value, setValue] = React.useState(defaultValue)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (!mounted) return

    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener("change", onChange)
    setValue(result.matches)

    return () => result.removeEventListener("change", onChange)
  }, [query, mounted])

  return mounted ? value : defaultValue
}