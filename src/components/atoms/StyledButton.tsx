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
p.isPrimary? tw`bg-yellow-500` : tw`bg-white`,
p.isSecondary? tw`bg-yellow-500 w-48 h-12` : tw `bg-white`

]);


export default  StyledButton;