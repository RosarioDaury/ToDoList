import { useContext } from "react"
import { FilterContext } from "../Context/FilterContext"
import { FormProvider } from "../Context/FormContext"
import { Form } from "./Form/Form"
import { SideBar } from "./SideBar/SideBar"
import { Conteiner } from "./Styles-index"
import { Task } from "./Task/Task"
import { TaskCompleted } from "./Task/TaskCompleted"
import { TaskPending } from "./Task/TaskPending"

export const Index = () => {
    const {filter} = useContext(FilterContext);
    let title = "";

    switch (filter) {
        case "all":
                title = "All Tasks"
            break;
        
        case "pending":
            title = "Pending Tasks"
            break;

        case "completed":
            title = "Completed Tasks"
            break;

        default:
            break;
    }

    return(
        <Conteiner>
            <FormProvider>
                <SideBar/>
                <div>
                    <Form/>
                    <h2 style={{textAlign:"center"}}>{title}</h2>
                    {filter === "all" && <Task/>}
                    {filter === "pending" && <TaskPending/>}
                    {filter === "completed" && <TaskCompleted/>}           
                </div>
            </FormProvider> 
        </Conteiner>
    )
}