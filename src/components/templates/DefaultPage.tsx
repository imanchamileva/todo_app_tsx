import AddNewTask from '../atoms/AddNewTask';
import { Input } from '../atoms/Input'
import StyledButton from '../atoms/StyledButton';
import { Title } from '../atoms/Title';
import { useState } from 'react'

export const DefaultPage = () => {

    const [showInput, setShowInput] = useState<any>(false);


    const showInputHandle = ()  => {
      
        setShowInput(true)
        console.log('lal');
        
    }
    return (
        <section className="h-screen w-100 bg-gradient-to-r from-green-500 to-yellow-500 flex justify-center items-center">
            <section className="h-2/3 bg-gray-100 rounded-xl w-2/3 flex flex-col justify-around">
                <StyledButton onClick={showInputHandle}><Title text="Add a new task" /></StyledButton>
                <Title text="My Tasks" />
                {showInput && (
                        <Input />
                )
                }
                
            </section>
            
        </section>
    )
}

