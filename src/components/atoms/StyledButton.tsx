import tw from 'twin.macro';
import styled from '@emotion/styled'

type ButtonProps = {
    isPrimary ?: boolean;
    color?: 'primary' | 'secondary';
    disabled ?: boolean;
    size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button((p:ButtonProps) => [
tw`

line-through
bg-yellow-400
rounded
px-4
py-2
`, 
p.isPrimary? tw`bg-indigo-500` : tw`bg-white`

]);


export default  StyledButton;