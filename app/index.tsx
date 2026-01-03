import { createCliRenderer } from "@opentui/core"
import { createRoot } from "@opentui/react"

import { RouterProvider } from "@/router/provider"
import Home from "@/screens/home"
import Board from "@/screens/board"
import { useRouter } from "@/router/hook"

function App() {
  const router = useRouter()

  return (
    <box alignItems="center" justifyContent="center" flexGrow={1}>
      {router.current === "home" && <Home />}
      {router.current === "board" && <Board />}
    </box>
  )
}

const renderer = await createCliRenderer()
createRoot(renderer).render(
  <RouterProvider>
    <App />
  </RouterProvider>,
)
