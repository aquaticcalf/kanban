import { useContext } from "react"

import { RouterContext } from "@/router/context"

export function useRouter() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error("useRouter must be used within RouterProvider")
  return ctx
}
