
import { ModeToggle } from './components/mode-toggle'
import ListRevisions from './queries/ListRevisions'
import { ThemeProvider } from "@/components/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle/>
      <ListRevisions/>
    </ThemeProvider>
  )
}

export default App
