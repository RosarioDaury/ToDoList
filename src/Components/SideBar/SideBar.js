import { useContext } from "react";
import { FilterContext } from "../../Context/FilterContext"
import { SideConteiner } from "./Style"

export const SideBar = () => {
    const {setFilter} = useContext(FilterContext);

    return(
        <SideConteiner>

            <h1>Filter your task</h1>

            <div className="options-side">
                <h3 onClick={() => setFilter("all")}>Show All</h3>
                <h3 onClick={() => setFilter("pending")}>Show Pending</h3>
                <h3 onClick={() => setFilter("completed")}>Show Completed</h3>
            </div>

            <br/>
            <br/>
            <br/>

            <img src="data:image/png;base64,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" alt="logo"/>

        </SideConteiner>
    )
}