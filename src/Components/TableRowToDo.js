import { useContext } from "react"
import { FormContext } from "../Context/FormContext"
export const TableRowToDo = ({data}) => {
    const {handleDelete, setDataToEdit, handleCheck} = useContext(FormContext)

    return(
        <>
            <tr>
                <td>{data.task}</td>
                <td>{data.description}</td>
                <td>{data.date}</td>
                <td>
                    <button onClick={() => setDataToEdit(data)}>Update</button>
                    <button onClick={() => handleDelete(data.id)}>Remove</button>
                </td>
                <td><input type="checkbox" onChange={() => handleCheck(data.id, data.check)} checked={data.check ?'checked' : ''}/></td>
            </tr>
        </>
    )
}