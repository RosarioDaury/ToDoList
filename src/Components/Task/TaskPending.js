import { useContext } from "react"
import { DataContext } from "../../Context/DataContext"
import { SingleTask } from "./SingleTask"
import { TaskConteiner } from "./Style"

export const TaskPending = () => {
    const {data} = useContext(DataContext);

    const info = data.filter(el => el.check === false);

    return(
        <TaskConteiner>
            {info.length > 0 ? info.map(el => <SingleTask data={el} key={el.id}/>) :<h3>Not Tasks To show</h3>}
        </TaskConteiner>
    )
}