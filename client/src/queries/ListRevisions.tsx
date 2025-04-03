import { useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import axios from "axios"
import Revision from "../structures/Revision"

const ListRevisions = () => {

    const queryClient = useQueryClient()

    const mutation = useMutation({
      mutationFn: (markRevisions: number[]) => {
          return axios.post("http://localhost:8000/mark-revisions", {ids: markRevisions})
      },

      onSuccess: () => {
        queryClient.invalidateQueries(["revisions"])
      },

  })

    const {isPending, error, data} = useQuery({
        queryKey: ['revisions'],
        queryFn: () => 
            fetch("http://localhost:8000/list-revisions")
            .then((res) => res.json()
            .catch((err) => console.log(err)))
    })

    if  (isPending) return "Loading"
    if (error) return "An error has been occured" + error.message

  return (
    <>
    <h3>{data?.response?.length} Questions</h3>
    <ul>
        {data.response.map((ques: {revision_id: number; question: string; tags: string; revision_date: string; completed: boolean}) => (
          <li key={ques.revision_id}>
            <Revision 
            isChecked={ques.completed}
            revisionId={ques.revision_id}
            handleChecks={() => mutation.mutate([ques.revision_id])}
            questionName={ques.question} 
            questionTags={ques.tags} 
            revisionDate={ques.revision_date}/>
          </li>
        ))}
    </ul>
    </>
  )
}

export default ListRevisions