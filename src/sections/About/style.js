import styled from 'styled-components'

export const AboutText = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    padding: 0 4rem;

    p {
        margin-bottom: 1.5rem;
    }

    @media ${props => props.theme.mediaQueries.medium} {
        width: 90%;
    }
    @media ${props => props.theme.mediaQueries.small} {
        font-size: 1.7rem;
        width: 95%;
    }
    @media ${props => props.theme.mediaQueries.smallest} {
        width: 100%;
    }
`
export const StackTitle = styled.h3`
    font-weight: 600;
    color: var(--text-highlight);
    margin-top: 8rem;
    font-size: 2.5rem;
    transition: color 0.2s ease-out;

    @media ${props => props.theme.mediaQueries.small} {
        font-size: 2rem;
    }
    @media ${props => props.theme.mediaQueries.smallest} {
        font-size: 1.8rem;
    }
`

export const Stack = styled.p`
    color: var(--primary);
    width: 75%;
    margin: 3rem auto;
    text-transform: uppercase;
    margin-bottom: 5rem;
    font-size: 1.6rem;
    line-height: 1.8;
    font-weight: 700;

    @media ${props => props.theme.mediaQueries.small} {
        width: 90%;
        font-size: 1.3rem;
    }
    @media ${props => props.theme.mediaQueries.smallest} {
        font-size: 1.2rem;
    }
`
