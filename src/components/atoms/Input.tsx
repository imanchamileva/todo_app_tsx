import { nanoid } from 'nanoid';
import React, { ChangeEvent } from 'react'
import {useState} from 'react'
import { FaCheckSquare } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { ITodoItem, IUser } from '../../Interfaces';



export const Input = () => {

    const [getInput, setGetInput] = useState<string>('lala');
    const [arrayData, setArrayData] = useState<any>([]);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) : void => {
    setGetInput(e.target.value)
    console.log(e.target.value);
}


    const addItem = (e :React.FormEvent<HTMLFormElement> ) :void => {
    e.preventDefault();
    //create new todo
    let newTask = {id :nanoid(), title: getInput, completed: false}
    //add todo to the state
    setArrayData([...arrayData, newTask]);
    //clear the value of the task
    setGetInput('')
    }


    const removeItem = (id:number)   => {

   
        const newList = arrayData.filter((item: ITodoItem) => item.id !== id)
        setArrayData(newList);
        console.log('my new list',newList);
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
                              <button className='cursor-pointer bg-green-500 px-2 py-2'><FaCheckSquare className='cursor-pointer' /></button>

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
