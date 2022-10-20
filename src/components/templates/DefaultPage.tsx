import { Input } from '../atoms/Input'
import StyledButton from '../atoms/StyledButton';
import { Title } from '../atoms/Title';
import { useState } from 'react'

export const DefaultPage = () => {

    const [showInput, setShowInput] = useState<any>(false);
    const [hideButton, setHideButton] = useState<any>(true)

    const showInputHandle = ()  => {
        setShowInput(true)
        setHideButton(false)
    }

    return (
        <section className="h-screen w-100 bg-gradient-to-r from-blue-800 to-blue-500 flex justify-center items-center">
            <section className="h-2/3 bg-gray-100 rounded-xl w-2/3 flex flex-col items-center justify-around">
            <Title text="My Tasks" />
            {hideButton &&
                <StyledButton isPrimary={true} onClick={showInputHandle}><Title text="Add a new task" /></StyledButton>
            }
                  {showInput && (
                <Input />
                )
                }
                
            </section>
            
        </section>
    )
}

