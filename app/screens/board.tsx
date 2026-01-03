import { useRouter } from "@/router/hook"

function Board() {
  const router = useRouter()
  const id = router.params.id as string

  const handleMouseDown = () => {
    router.goback()
  }

  return (
    <box alignItems="center" justifyContent="center" flexGrow={1}>
      <box justifyContent="center" alignItems="flex-start">
        <box
          marginTop={1}
          marginBottom={1}
          flexDirection="row"
          justifyContent="flex-start"
          flexGrow={1}
        >
          <box
            onMouseDown={handleMouseDown}
            backgroundColor="blue"
            paddingLeft={2}
            paddingRight={2}
            justifyContent="center"
            alignItems="center"
          >
            <text attributes={16 | 4}>back</text>
          </box>
        </box>

        <ascii-font font="tiny" text="board" />
        <text attributes={2}>board id : {id}</text>
      </box>
    </box>
  )
}

export default Board
