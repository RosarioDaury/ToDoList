import { useContext } from "react"
import { FormContext } from "../../Context/FormContext"
import { FormStyled } from "./Style"

export const Form = () => {
    const {form, handleChange, handleSubmit, dataToEdit} = useContext(FormContext)

    return(
        <>
            <FormStyled>
                <div>
                    <spam>Task</spam>
                    <input type="text" placeholder="Task Name" name="task" onChange={handleChange} value={form.task}/>
                </div>
                <div>
                    <spam>Descript</spam>
                    <input type="text" placeholder="Description" name="description" onChange={handleChange} value={form.description}/>
                </div>
                <input type="submit" value={dataToEdit ?"Edit" :"Add" } onClick={handleSubmit}/>
            </FormStyled>
        </>
    )
}