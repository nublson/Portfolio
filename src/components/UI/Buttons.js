import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const StyledButton = styled(Link)`
    outline: none;
    background: ${props =>
        props.type === 'full' ? 'var(--primary)' : 'var(--background)'};
    color: ${props =>
        props.type === 'full' ? 'var(--white)' : 'var(--primary)'};
    text-transform: uppercase;
    font-family: inherit;
    font-weight: 700;
    border: ${props =>
        props.type === 'full'
            ? '1px solid transparent'
            : '1.5px solid var(--primary)'};
    text-decoration: none;
    border-radius: var(--radius);
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    padding: 1.5rem 4rem;
    margin: 0rem;
    cursor: pointer;
    box-shadow: 0px 8px 15px var(--shadow-color);
    transition: all 0.2s ease-out;
    &:hover {
        box-shadow: 0px 10px 20px var(--shadow-btn);
    }
    &:active {
        box-shadow: 0 3px 8px var(--shadow-btn);
    }

    @media ${props => props.theme.mediaQueries.medium} {
        padding: 1.5rem 3.5rem;
    }
    @media ${props => props.theme.mediaQueries.small} {
        padding: 1.3rem 3.2rem;
    }
`

export const Button = ({ text, type, to }) => {
    return (
        <StyledButton to={to} spy={true} type={type} smooth={true}>
            {text}
        </StyledButton>
    )
}
