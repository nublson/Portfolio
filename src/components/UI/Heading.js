import React from 'react'
import styled from 'styled-components'

import { BorderAnimated, Evidence } from '../../components/UI/textStyles'

const Wrapper = styled.div`
    text-align: center;
    margin-bottom: 7rem;

    @media ${props => props.theme.mediaQueries.medium} {
        margin-bottom: 5rem;
    }
    @media ${props => props.theme.mediaQueries.small} {
        margin-bottom: 4.5rem;
    }
`

const Title = styled.h2`
    font-size: 3rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    transition: color 0.2s ease-out;

    @media ${props => props.theme.mediaQueries.small} {
        font-size: 2.5rem;
    }
    @media ${props => props.theme.mediaQueries.smallest} {
        font-size: 2.3rem;
    }
`

const SubTitle = styled.p`
    font-size: 1.8rem;

    @media ${props => props.theme.mediaQueries.small} {
        font-size: 1.7rem;
    }
    @media ${props => props.theme.mediaQueries.smaller} {
        font-size: 1.6rem;
    }
    @media ${props => props.theme.mediaQueries.smallest} {
        font-size: 1.5rem;
    }
`

export const Heading = ({ title, subTitle }) => {
    return (
        <Wrapper>
            <Title>
                {' '}
                <BorderAnimated>{title}</BorderAnimated>{' '}
            </Title>
            <SubTitle>
                {' '}
                <Evidence> "{subTitle}" </Evidence>{' '}
            </SubTitle>
        </Wrapper>
    )
}
