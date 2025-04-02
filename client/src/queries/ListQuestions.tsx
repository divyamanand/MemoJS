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
    <ul>
        {data.response.map((ques: {id: number; question: string, diffculty: string, tags: string;}) => (
          <li key={ques.id}>{ques.question}</li>
        ))}
    </ul>
    </>
  )
}

export default ListQuestions