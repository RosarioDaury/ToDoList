import { useContext } from "react"
import { FormContext } from "../Context/FormContext"

export const FormToDo = () => {
    const {form, handleChange, handleSubmit, dataToEdit} = useContext(FormContext)
    return(
        <>
            <form>
                <input type="text" name="task" placeholder="Task Name" onChange={handleChange} value={form.task}/>
                <input type="text" name="description" placeholder="Task Description" onChange={handleChange} value={form.description}/>    
                <input type="submit" value={dataToEdit ?"Edit" :"Add" } onClick={handleSubmit}/>   
            </form>        
        </>
    )
}