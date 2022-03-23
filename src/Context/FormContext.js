import { createContext, useContext, useEffect, useState } from "react";
import { DB } from "../Services/FireBase";
import { DataContext } from "./DataContext";

export const FormContext = createContext();

const initialForm = {
    id: null,
    task: "",
    description: "",
    date: "",
    check: false
}

export const FormProvider = ({children}) => {
    const [form, setForm] = useState(initialForm);
    const [dataToEdit, setDataToEdit] = useState(null);
    const {handleUpdate} = useContext(DataContext);

    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
    },[dataToEdit])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.task || !form.description) return;

        if(form.id === null){
            DB.collection('list').add({
                id: Date.now(),
                task: form.task,
                description: form.description,
                date: new Date().toLocaleDateString("en-US"),
                check: false
            })
            .then(doc => {
                setForm(initialForm);
                handleUpdate();
            })
            .catch(error => {
                console.log(error);
            })
        }else{
            DB.collection('list').where('id', '==', form.id)
            .get()
            .then(element => {
                element.forEach(doc => {
                    doc.ref.update({
                        id: form.id,
                        task: form.task,
                        description: form.description,
                        date: new Date().toLocaleDateString("en-US"),
                        check: form.check
                    })
                })
                handleUpdate();
                setDataToEdit(null);
                
            })
        }

    }

    const handleCheck = (id, checked) => {
        DB.collection('list').where('id', '==', id)
        .get()
        .then(element => {
            element.forEach(doc => {
                doc.ref.update({
                    check: checked ?false : true
                })
            })
            handleUpdate();
        })
    }

    const handleDelete = (id) => {
        DB.collection('list').where('id', '==', id)
        .get()
        .then(element => {
            element.forEach(doc => {
                doc.ref.delete();
            })
            handleUpdate();
        })
    }

    const data = {form, handleChange, handleSubmit, handleCheck, dataToEdit, setDataToEdit, handleDelete}
    return <FormContext.Provider value={data}>{children}</FormContext.Provider>
}