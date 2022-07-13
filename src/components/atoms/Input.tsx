import { nanoid } from 'nanoid';
import React, { ChangeEvent } from 'react'
import {useState, useEffect} from 'react'
import { FaCheckSquare } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { ITodoItem, IUser } from '../../Interfaces';



export const Input = () => {

    const [getInput, setGetInput] = useState<string>('');
    const [arrayData, setArrayData] = useState<any>([]);
    const [editTodo, setEditTodo] = useState<any>(null)
    const [inputChange, setInputChange] = useState<any>('');
    const [newEditedArray, setNewEditedArray] = useState<any>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) : void => {
    setGetInput(e.target.value)
    console.log(e.target.value);
}


    const addItem = (e :React.FormEvent<HTMLFormElement> ) :void => {
    e.preventDefault();
    if(!editTodo) {
    //create new todo
    let newTask = {id :nanoid(), title: getInput, completed: false}
    //add todo to the state
    setArrayData([...arrayData, newTask]);
    //clear the value of the task
    setGetInput('')
    } else {
    editItem(editTodo.id, getInput, editTodo.completed)
    }
}


    const removeItem = (id:number)   => {
        const newList = arrayData.filter((item: ITodoItem) => item.id !== id)
        setArrayData(newList);
        console.log('my new list',newList);
    }

    const editItem = (id: number, title: string, completed: boolean) => {
        const newList = arrayData.map((item: ITodoItem) => {
            item.id === id ? {...arrayData, title, completed} : item;
        })
        setArrayData(newList);
        setEditTodo("")
        console.log('the new list',newList);
        
        useEffect(() => {
            if(editTodo) {
                setGetInput(editTodo.title);
            } else {
                setGetInput("")
            }
        },[setGetInput, editTodo]);
    }

    return (
        <>
            <form onSubmit={addItem}>
                <input type="text" 
                value={getInput} 
                onChange={handleChange} 
                className="border-2 rounded" />
                <button className="px-8 py-1 bg-green-600 text-white rounded">Add</button>
            </form>
            <div>
                        {arrayData.map((elem : ITodoItem) => (
                            <ul key={elem.id}>
                              <li className="text-2xl">{elem.title}</li> 
                              <button onClick={() => editItem(elem.id, elem.title, elem.completed)} className='cursor-pointer bg-green-500 px-2 py-2'><FaCheckSquare className='cursor-pointer' /></button>

                              <button onClick={() => removeItem(elem.id)}
                              className='cursor-pointer bg-red-500 px-2 py-2'>
                               <FaTimes />
                              </button>
                            </ul>
                        
                        )
                          )}             
            </div>
        </>
    )
}
