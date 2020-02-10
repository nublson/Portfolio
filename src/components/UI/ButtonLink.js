import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
    outline: none;
    background: ${({ type }) =>
        type === 'full' ? 'var(--primary)' : 'transparent'};
    color: ${({ type }) =>
        type === 'full' ? 'var(--white)' : 'var(--primary)'};
    text-transform: uppercase;
    text-decoration: none;
    font-family: inherit;
    display: flex;
    align-items: center;
    font-weight: 700;
    letter-spacing: 1.5px;
    border: ${({ type }) =>
        type === 'full' ? '2px transparent' : '2px solid'};
    border-radius: var(--radius);
    font-size: 1.2rem;
    padding: 1rem 2rem;
    margin: 0rem;
    cursor: pointer;
    box-shadow: ${({ type }) =>
        type === 'full' ? '0px 6px 10px var(--shadow-color)' : 'none'};
    transition: all 0.2s ease-out;
    &:hover {
        transform: translateY(-3px);
        box-shadow: ${({ type }) =>
            type === 'full' ? '0px 8px 15px var(--shadow-btn)' : 'none'};
    }
    &:active {
        transform: translateY(1px);
        box-shadow: ${({ type }) =>
            type === 'full' ? '0 3px 6px var(--shadow-btn)' : 'none'};
    }

    & > :first-child {
        margin-right: 1rem;
    }

    @media ${props => props.theme.mediaQueries.small} {
        padding: 0.9rem 2.4rem;
    }
`

const ButtonLink = ({ children, type, url }) => (
    <StyledLink type={type} href={url} target="_blank" rel="noreferrer">
        {children}
    </StyledLink>
)

export default ButtonLink
