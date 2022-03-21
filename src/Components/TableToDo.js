import { useContext } from "react"
import { DataContext } from "../Context/DataContext"
import { TableRowToDo } from "./TableRowToDo";
export const TableToDo = () => {
    const {data} = useContext(DataContext);

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Actions</th>
                        <th>Done</th>
                    </tr>
                </thead>
                <tbody>
                    {data ?data.map(el => <TableRowToDo data={el} key={el.id}/>)  :<tr><td>Not Data Avaliable</td></tr>}
                </tbody>
            </table>
        </>
    )
}