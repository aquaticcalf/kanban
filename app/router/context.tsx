import { createContext } from "react"

import type { Screen } from "@/types"

interface RouterContextType {
  current: Screen
  params: Record<string, unknown>
  goto: (screen: Screen, params?: Record<string, unknown>) => void
  goback: () => void
}

export const RouterContext = createContext<RouterContextType | null>(null)
