import Question from "@/structures/Question"
import { useQuery} from "@tanstack/react-query"

const ListQuestions = () => {

    const {isPending, error, data} = useQuery({
        queryKey: ['questions'],
        queryFn: () => 
            fetch("http://localhost:8000/list-questions")
            .then((res) => res.json()
            .catch((err) => console.log(err)))
    })

    if  (isPending) return "Loading"
    if (error) return "An error has been occured" + error.message
  return (
    <>
    <h3>{data?.response?.length} Questions</h3>
    <ul>
        {data.response.map((ques: 
        {id: number; question: string; 
          tags: string; last_revised: string; link: string;}) => (
          <li key={ques.id}>
            <Question 
            questionName={ques.question} 
            questionTags={ques.tags} 
            lastRevision={ques.last_revised || "None"}
            questionLink={ques.link}/>
          </li>
        ))}
    </ul>
    </>
  )
}

export default ListQuestions