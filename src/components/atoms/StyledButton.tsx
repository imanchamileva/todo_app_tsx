import styled from "styled-components";

export type ButtonProps = {
    color?: 'primary' | 'secondary';
    disabled ?: boolean;
}

export const StyledButton = styled.h3<ButtonProps> `

text-decoration: line-through;
bg-yellow-400
rounded 
px-4 
py-2 
`

export default  StyledButton;