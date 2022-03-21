import { createContext, useEffect, useState } from "react";
import { DB } from "../Sercices/FireBase";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(false);
    let collection = DB.collection('list')

    useEffect(() => {
        DB.collection('list')
        .get()
        .then(querySnapshot => {
            const info = [];
            querySnapshot.forEach(doc => {
                info.push(doc.data())
            })
            setData(info)
        })
        .catch(error => {
            setData(null)
        })
    },[update, collection])

    const value = {data, update, setUpdate}; 

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}