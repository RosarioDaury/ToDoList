import { useContext } from "react"
import { DataContext } from "../../Context/DataContext"
import { SingleTask } from "./SingleTask"
import { TaskConteiner } from "./Style"

export const Task = () => {
    const {data} = useContext(DataContext)

    return(
        <TaskConteiner>
            {data.length > 0 ? data.map(el => <SingleTask data={el} key={el.id}/>) :<h3>Not Tasks To show</h3>}
        </TaskConteiner>
    )
}