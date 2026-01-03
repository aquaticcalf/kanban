import { useState, type ReactNode } from "react"

import { initialScreen as first, type Screen } from "@/types"

import { RouterContext } from "@/router/context"

interface RouterProviderProps {
  children: ReactNode
  initialScreen?: Screen
}

export function RouterProvider({ children, initialScreen = first }: RouterProviderProps) {
  const [current, setCurrent] = useState<Screen>(initialScreen)

  const [params, setParams] = useState<Record<string, unknown>>({})

  const [history, setHistory] = useState<
    Array<{ screen: Screen; params: Record<string, unknown> }>
  >([])

  const goto = (screen: Screen, newParams?: Record<string, unknown>) => {
    setHistory((h) => [...h, { screen: current, params }])
    setCurrent(screen)
    setParams(newParams || {})
  }

  const goback = () => {
    if (history.length === 0) return
    const previous = history[history.length - 1]
    if (!previous) return
    setHistory((h) => h.slice(0, -1))
    setCurrent(previous.screen)
    setParams(previous.params)
  }

  return (
    <RouterContext.Provider value={{ current, params, goto, goback }}>
      {children}
    </RouterContext.Provider>
  )
}
