import tw from 'twin.macro';
import styled from '@emotion/styled'

type ButtonProps = {
    isPrimary ?: boolean;
    disabled ?: boolean;
}

const StyledButton = styled.button((p:ButtonProps) => [
tw`

bg-blue-500
rounded
px-4
py-2
`, 
p.isPrimary? tw`bg-yellow-500` : tw`bg-white`

]);


export default  StyledButton;