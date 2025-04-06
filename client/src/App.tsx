
import { ModeToggle } from './components/mode-toggle'
import ListRevisions from './queries/ListRevisions'
import { ThemeProvider } from "@/components/theme-provider"
import QuestionForm from './structures/QuestionForm'
import ListQuestions from './queries/ListQuestions'
import FormTrigger from "./structures/FormTrigger"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle/>
      <ListRevisions/>
      <QuestionForm trigger={<FormTrigger/>}/>
      <ListQuestions/>
    </ThemeProvider>
  )
}

export default App
