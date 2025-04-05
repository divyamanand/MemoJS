
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"


const QuestionForm = () => {
    

  const [quest, setQuest] = useState({question: "", difficulty: "", tags: "", link: ""})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate([quest])
    setQuest({question: "", difficulty: "", tags: "", link: ""})
  }

  const mutation = useMutation<object[], Error, object[]>({
    mutationFn: 
    (quests : object[]) => {
        return axios.post("http://localhost:8000/add-questions", {questions: quests})
    }
})
  
  return (
    <>
        <form onSubmit={handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="question">Question</Label>
          <Input type="question" id="question" placeholder="Question" 
          value={quest.question}
          onChange={(e) => setQuest({...quest, question: e.target.value})}/>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="difficulty">Difficulty</Label>
          <Input type="difficulty" id="difficulty" placeholder="Difficulty" 
          value={quest.difficulty}
          onChange={(e) => setQuest({...quest, difficulty: e.target.value})}/>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="tags">Tags</Label>
          <Input type="tags" id="tags" placeholder="Tags" 
          value={quest.tags}
          onChange={(e) => setQuest({...quest, tags: e.target.value})}/>
        </div>
          <Label htmlFor="link">Link</Label>
          <Input type="link" id="link" placeholder="Link" 
          value={quest.link}
          onChange={(e) => setQuest({...quest, link: e.target.value})}/>
        </div>
        <Button type="submit">Submit</Button>
        </form>
    </>
  )
}

export default QuestionForm