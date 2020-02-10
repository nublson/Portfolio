import styled from 'styled-components'
import Img from 'gatsby-image'

export const Item = styled.div`
    width: 100%;
    text-align: center;

    margin-bottom: 10rem;
`
export const Image = styled(Img)`
    max-width: 80%;
    margin: 0 auto;
    transition: all 0.2s;

    &:hover {
        transform: translateY(-1.5rem);
    }
`

export const Title = styled.h3`
    font-size: 2.5rem;
    margin-bottom: 3rem;
`

export const Info = styled.div`
    width: 100%;
    margin: 1rem auto 0;
`

export const Text = styled.div`
    font-size: 1.4rem;
    color: var(--text);
    font-weight: 400;
    margin: 1rem 0;
    line-height: 1.7;
    transition: color 0.2s ease-out;
    & a {
        text-decoration: underline;
        color: var(--text-highlight);
        font-weight: 600;
        transition: color 0.2s ease-out;
        &:hover {
            color: var(--primary);
        }
    }

    p {
        font-size: 1.6rem;
        max-width: 70%;
        margin: 0 auto;
    }
`

export const Stack = styled.p`
    margin: 4rem auto;
    font-weight: bold;
    max-width: 60%;
    color: var(--text-highlight);
    font-size: 1.6rem;
    text-transform: uppercase;
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;

    & a:first-of-type {
        margin-right: 3rem;
    }
`
