
import { ModeToggle } from './components/mode-toggle'
import ListRevisions from './queries/ListRevisions'
import { ThemeProvider } from "@/components/theme-provider"
import QuestionForm from './structures/QuestionForm'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle/>
      <ListRevisions/>
      <QuestionForm/>
    </ThemeProvider>
  )
}

export default App
