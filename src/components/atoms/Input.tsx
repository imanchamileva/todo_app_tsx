import { nanoid } from 'nanoid';
import React, { ChangeEvent } from 'react'
import {useState} from 'react'
import { FaCheckSquare } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";



type ICardItem = {
text: string;
id: number;
  };

export const Input = () => {

    const [getInput, setGetInput] = useState<any>('');
    const [arrayData, setArrayData] = useState<any>([]);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) : void => {
    setGetInput(e.target.value)
    console.log(e.target.value);
}


    const onButtonClick = (e :React.FormEvent<HTMLFormElement> ) :void => {
    e.preventDefault();
    let newEntry = {id :nanoid, title: getInput, completed: false}
    setArrayData([...arrayData, newEntry]);
    setGetInput('')
    }


    const removeItem = (id: number) : void => {

        const newList = arrayData.filter((item: ICardItem) => item.id != id)
        setArrayData(newList);
    }


    return (
        <>
            <form onSubmit={onButtonClick}>
                <input type="text" 
                value={getInput} 
                onChange={handleChange} 
                className="border-2 rounded" />

                <button className="px-8 py-1 bg-green-600 text-white rounded">Add</button>
            </form>
            <div>
                <ul>
                        {arrayData.map((elem : ICardItem) => (
                            <li key={elem.id}>
                              <span className="text-2xl">{elem.text}</span> 
                              <button className='cursor-pointer bg-green-500 px-2 py-2'><FaCheckSquare className='cursor-pointer' /></button>

                              <button onClick={removeItem}
                              className='cursor-pointer bg-red-500 px-2 py-2'>
                                <FaTimes />
                              </button>
                            </li>
                        
                        ) )}

                </ul>
            </div>
        </>
    )
}
