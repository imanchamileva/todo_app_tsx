import tw from 'twin.macro';
import styled from '@emotion/styled'

type ButtonProps = {
    isPrimary ?: boolean;
    disabled ?: boolean;
    isSecondary ?: boolean;
}

export const StyledButton = styled.button((p:ButtonProps) => [
tw`

bg-blue-500
rounded
px-4
py-2
`, 
p.isPrimary? tw`bg-yellow-500 w-36 h-10 text-white` : tw`bg-green-500 text-white w-36 h-10`,
p.isSecondary? tw`bg-purple-500 w-48 h-10 text-white` : tw `bg-pink-500 text-white  w-36 h-10`

]);


export default  StyledButton;