import React, { ChangeEvent } from 'react'
import {useState} from 'react'


type ICardItem = {
text: string;
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
    setArrayData([...arrayData,
         {text: getInput, completed: false, id :1}]
         );
         setGetInput('')
    }




    return (
        <>
            <form onSubmit={onButtonClick}>
                <input type="text" 
                value={getInput} 
                onChange={handleChange} />

                <button>Add</button>
            </form>
            <div>
                <ul>
                        {arrayData.map((elem : ICardItem) => (
                            <li>
                                {elem.text}
                            </li>
                        ) )}

                </ul>
            </div>
        </>
    )
}
