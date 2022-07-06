import { nanoid } from 'nanoid';
import React, { ChangeEvent } from 'react'
import {useState} from 'react'
import { FaCheckSquare } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { MouseEvent } from 'react';


  interface ICardItem {
    title: string;
    id: number;
    completed: boolean;
    };

  type IUser = {
    
    id: number;
 
  }


export const Input = () => {

    const [getInput, setGetInput] = useState<any>('');
    const [arrayData, setArrayData] = useState<any>([]);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) : void => {
    setGetInput(e.target.value)
    console.log(e.target.value);
}


    const addItem = (e :React.FormEvent<HTMLFormElement> ) :void => {
    e.preventDefault();
    let newEntry = {id :nanoid(), title: getInput, completed: false}
    setArrayData([...arrayData, newEntry]);
    setGetInput('')
    }


    const removeItem = (e: React.MouseEvent<HTMLButtonElement>) :void  => {

      e.preventDefault()
        const newList = arrayData.filter((item: ICardItem, index: ICardItem) => item.id !== index.id)
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
                        {arrayData.map((elem : ICardItem, index: IUser) => (
                            <ul key={index.id}>
                              <li className="text-2xl">{elem.title}</li> 
                              <button className='cursor-pointer bg-green-500 px-2 py-2'><FaCheckSquare className='cursor-pointer' /></button>

                              <button onClick={removeItem}
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
