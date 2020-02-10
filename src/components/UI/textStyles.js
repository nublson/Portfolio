import styled from 'styled-components'

export const Border = styled.span`
    color: var(--text-highlight);
    font-weight: 700;
    padding: 0 0.7rem;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    text-decoration: none;
    box-shadow: inset 0 -0.5rem 0 var(--primary);
`

export const BorderAnimated = styled(Border)`
    box-shadow: inset 0 -0.7rem 0 var(--primary);

    &:hover {
        box-shadow: inset 0 -5.5rem 0 0 var(--primary);
        color: var(--background);
    }
`

export const BorderStatic = styled(Border)`
    color: var(--background);
    padding-top: 0.3rem;
    box-shadow: inset 0 -5.5rem 0 var(--primary);
`

export const Evidence = styled.span`
    color: var(--text-highlight);
    font-style: italic;
    font-weight: bold;
`

export const Link = styled.a`
    color: var(--text-highlight);
    font-weight: bold;
    text-decoration: underline;

    transition: all 0.2s;

    &:hover {
        color: var(--primary);
    }
`
