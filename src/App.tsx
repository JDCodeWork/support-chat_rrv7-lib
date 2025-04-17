import { AppRouter } from "./shared/AppRouter"
import { TanStackQuery } from "./shared/plugins/TanStackQuery"

function App() {
  return (
    <TanStackQuery>
      <AppRouter />
    </TanStackQuery>
  )
}

export default App
