import AddNewTask from '../atoms/AddNewTask';
import { Input } from '../atoms/Input'
import StyledButton from '../atoms/StyledButton';
import { Title } from '../atoms/Title';
import { useState, useEffect } from 'react'

export const DefaultPage = () => {

    const [showInput, setShowInput] = useState<any>('');


    const showInputHandle = () => {
        
        setShowInput('lala')
    }
    return (
        <section className="h-screen w-100 bg-gradient-to-r from-green-500 to-yellow-500 flex justify-center items-center">
            <section className="h-2/3 bg-gray-100 rounded-xl w-2/3 flex flex-col justify-around">
                <StyledButton><Title text="Add a new task" /></StyledButton>
                <Title text="My Tasks" />
                {showInput && (
                    <div onClick={() => showInputHandle}>
                        <Input />
                    </div>
                )
                }
            </section>

        </section>
    )
}

