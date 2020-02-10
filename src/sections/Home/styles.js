import styled from 'styled-components'
import { Link } from 'react-scroll'
import { animated } from 'react-spring'

export const SmallWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: left;

    @media ${props => props.theme.mediaQueries.medium} {
        text-align: center;
    }
`

export const Title = styled(animated.h1)`
    font-size: 6.4rem;
    text-transform: uppercase;
    color: var(--text-highlight);

    span {
        color: var(--primary);
    }

    .role {
        color: var(--text-highlight);
    }

    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 5.4rem;

        .role {
            font-size: 3.4rem;
        }
    }
    @media ${props => props.theme.mediaQueries.small} {
        font-size: 3.9rem;

        .role {
            font-size: 2.4rem;
        }
    }
    @media ${props => props.theme.mediaQueries.smallest} {
        font-size: 3.4rem;

        .role {
            font-size: 2rem;
        }
    }
`

export const SubTitle = styled(animated.p)`
    font-size: 1.6rem;
    width: 50%;
    margin-bottom: 5rem;

    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 1.7rem;
        width: 70%;
        margin: 0 auto 5rem;
    }
    @media ${props => props.theme.mediaQueries.smallest} {
        font-size: 1.5rem;
        width: 100%;
    }
`

export const StyledLink = styled(Link)`
    height: 40;
    width: 40;
    cursor: pointer;
`
