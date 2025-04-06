import { Plus} from 'lucide-react'

const FormTrigger = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button className='rounded-full bg-primary p-3'>
        <Plus size={30} className='text-accent-foreground'/>
      </button>
    </div>
  )
}

export default FormTrigger
