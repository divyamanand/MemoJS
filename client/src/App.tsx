import { ModeToggle } from './components/mode-toggle'
import ListRevisions from './queries/ListRevisions'
import { ThemeProvider } from "@/components/theme-provider"
import QuestionForm from './structures/QuestionForm'
import ListQuestions from './queries/ListQuestions'
import FormTrigger from "./structures/FormTrigger"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground px-4 sm:px-8 py-6 overflow-hidden">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Question Manager</h1>
            <p className="text-muted-foreground text-sm">
              Add and manage coding questions with ease.
            </p>
          </div>
          <ModeToggle />
        </div>

        <Separator className="my-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Revisions */}
          <Card className="h-3/4">
            <CardHeader>
              <CardTitle>Revisions</CardTitle>
              <CardDescription>Latest attempts and history</CardDescription>
            </CardHeader>
            <CardContent className="overflow-y-auto custom-scroll max-h-screen">
              <ListRevisions />
            </CardContent>
          </Card>

          {/* Questions */}
          <Card className="h-3/4">
            <CardHeader className="flex flex-row justify-between items-center">
              <div>
                <CardTitle>Questions</CardTitle>
                <CardDescription>Submitted questions list</CardDescription>
              </div>
              <QuestionForm trigger={<FormTrigger />} />
            </CardHeader>
            <CardContent className="overflow-y-auto custom-scroll max-h-[400px]">
              <ListQuestions />
            </CardContent>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
