import { createContext } from "react"

import type { Screen } from "@/types"

interface RouteContextType {
  current: Screen
  params: Record<string, unknown>
  goto: (screen: Screen, params?: Record<string, unknown>) => void
  goback: () => void
}

export const RouteContext = createContext<RouteContextType | null>(null)
