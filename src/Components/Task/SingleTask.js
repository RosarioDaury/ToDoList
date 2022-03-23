import { useContext} from "react"
import { FormContext } from "../../Context/FormContext"

export const SingleTask = ({data}) => {
    const {handleCheck, setDataToEdit, handleDelete} = useContext(FormContext)
    return(
        <div className="single">
            <h3>{data.task}</h3> 
            <h3>{data.description}</h3>
            <h3>{data.date}</h3>
            <button onClick={() => handleDelete(data.id)}>Remove</button>
            <button onClick={() => setDataToEdit(data)}>Edit</button>
            <input type="checkbox" checked={data.check ?"checked" :""} onChange={() => handleCheck(data.id, data.check)} />
        </div>
    )
}