import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const [filter, setFilter] = useState("all");

    const data = {filter, setFilter};
    return <FilterContext.Provider value={data}>{children}</FilterContext.Provider>
}