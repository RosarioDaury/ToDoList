import { createContext, useContext, useEffect, useState } from "react";
import { DB } from "../Sercices/FireBase";
import { DataContext } from "./DataContext";

export const FormContext = createContext();

const initialState = {
    id: null,
    task: "",
    description: "",
    date: "",
    check : false
}

export const FormProvider = ({children}) => {
    const [form, setForm] = useState(initialState);
    const [dataToEdit, setDataToEdit] = useState(null)
    const {update, setUpdate} = useContext(DataContext);

    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialState);
        }
    },[dataToEdit])

    const toUpdate = () => {
        if(update){
            setUpdate(false);
        }else{
            setUpdate(true)
        }
    }

    const handleChange = (e) => {
        setForm(
            {
                ...form,
                [e.target.name] : e.target.value
            }
        )
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!form.task || !form.description) return;

        if(form.id === null){
            DB.collection('list')
            .add({
                id: Date.now(),
                task: form.task,
                description : form.description,
                date: new Date().toLocaleDateString("en-US"),
                check: false
            })
            toUpdate();
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
                toUpdate();
                setDataToEdit(null);
            })
        }

        setForm(initialState);
    }

    const handleDelete = (id) => {
        DB.collection('list').where('id', '==', id)
        .get()
        .then(element => {
            element.forEach(doc => {
                doc.ref.delete();
            })
        })
        toUpdate();
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
            toUpdate();
        })
    }

    const data = {form, handleChange, handleSubmit, handleDelete, dataToEdit, setDataToEdit, handleCheck};

    return <FormContext.Provider value={data}>{children}</FormContext.Provider>
}