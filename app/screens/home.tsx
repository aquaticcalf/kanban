import { useRouter } from "@/router/hook"
import { useKeyboard } from "@opentui/react"

function Home() {
  const router = useRouter()

  useKeyboard((_e) => {
    router.goto("board", { id: "someid" })
  })

  const handleMouseDown = () => {
    router.goto("board", { id: "someid" })
  }

  return (
    <box alignItems="center" justifyContent="center" flexGrow={1}>
      <box justifyContent="center" alignItems="flex-end">
        <ascii-font font="tiny" text="kanban" />
        <box marginTop={1}>
          <box
            onMouseDown={handleMouseDown}
            paddingLeft={2}
            paddingRight={2}
            backgroundColor="blue"
            justifyContent="center"
            alignItems="center"
          >
            <text attributes={16 | 4}>go to board</text>
          </box>
        </box>
      </box>
    </box>
  )
}

export default Home
