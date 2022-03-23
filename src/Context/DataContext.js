import { createContext, useEffect, useState } from "react";
import { DB } from "../Services/FireBase";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        DB.collection('list')
        .get()
        .then(querySnapshot => {
            const info = [];
            querySnapshot.forEach(doc => {
                info.push(doc.data())
            })
            setData(info)
            console.log("done")
        })
        .catch(error => {
            setData([])
            console.log(error)
        })
    },[update])

    const handleUpdate = () => {
        if(update){
            setUpdate(false);
        }else{
            setUpdate(true);
        }
    }

    const value = {data, handleUpdate}; 

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}