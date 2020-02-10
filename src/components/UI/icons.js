import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { IoIosArrowDown } from 'react-icons/io'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const IconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    & > *:not(:last-child) {
        margin-right: 3rem;
    }

    @media ${props => props.theme.mediaQueries.small} {
        margin-bottom: 4rem;

        & > *:not(:last-child) {
            margin-right: 2rem;
        }
    }
    @media ${props => props.theme.mediaQueries.smaller} {
        margin-bottom: 3rem;

        & > *:not(:last-child) {
            margin-right: 1rem;
        }
    }
`

const ScrollDownWrapper = styled(animated.div)`
    position: absolute;
    width: 2rem;
    height: 2rem;
    bottom: 0;
    left: 50%;
    margin-bottom: 3rem;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover {
        transform: translate(-50%, -3px);
    }
    &:active {
        transform: translate(-50%, 1px);
    }
`

const StyledLink = styled.a`
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius);
    border: 2px solid var(--primary);
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.4);
    transition: all 0.2s;

    &:hover {
        background-color: var(--primary);
    }

    @media ${props => props.theme.mediaQueries.small} {
        width: 4rem;
        height: 4rem;
    }
    @media ${props => props.theme.mediaQueries.smaller} {
        width: 3.8rem;
        height: 3.8rem;
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 3rem;
    color: var(--primary);
    transition: all 0.2s;

    ${StyledLink}:hover & {
        color: var(--background);
    }

    @media ${props => props.theme.mediaQueries.small} {
        font-size: 2.5rem;
    }
    @media ${props => props.theme.mediaQueries.smaller} {
        font-size: 2rem;
    }
`

export const ArrowDown = () => {
    const ScrollDownSpring = useSpring({
        config: config.wobbly,
        delay: 500,
        opacity: 1,
        transform: 'translate(-50%, 0px)',
        from: {
            opacity: 0,
            transform: 'translate(-50%, 40px)',
        },
    })

    return (
        <ScrollDownWrapper style={ScrollDownSpring}>
            <Link to="about" spy={true} smooth={true}>
                <IoIosArrowDown color="var(--primary)" size="4rem" />
            </Link>
        </ScrollDownWrapper>
    )
}

export const SocialIcons = () => {
    return (
        <IconsWrapper>
            <StyledLink
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
            >
                <StyledIcon icon={faLinkedinIn} />
            </StyledLink>
            <StyledLink
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
            >
                <StyledIcon icon={faGithub} />
            </StyledLink>
            <StyledLink
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
            >
                <StyledIcon icon={faInstagram} />
            </StyledLink>
            <StyledLink
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
            >
                <StyledIcon icon={faTwitter} />
            </StyledLink>
        </IconsWrapper>
    )
}
