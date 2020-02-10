import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const StyledImage = styled(Img)`
    position: absolute !important;
    user-select: none;
    background-color: transparent;
    top: -20%;
    overflow: hidden;
    right: -3%;
    width: 40%;
    transform: rotate(-15deg);

    @media ${props => props.theme.mediaQueries.largest} {
        top: -20%;
    }
    @media ${props => props.theme.mediaQueries.large} {
        top: -10%;
        right: -6%;
        width: 60%;
    }
    @media ${props => props.theme.mediaQueries.medium} {
        top: -5%;
        width: 55%;
    }
    @media ${props => props.theme.mediaQueries.small} {
        top: 0%;
        width: 55%;
    }
    @media ${props => props.theme.mediaQueries.smaller} {
        top: 0%;
        right: -10%;
        width: 70%;
    }
    @media ${props => props.theme.mediaQueries.smallest} {
        top: 0%;
        right: -10%;
        width: 60%;
    }
`
const BackgroundLogo = () => {
    const { file } = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo_background.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxHeight: 1080) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    return (
        <div>
            <StyledImage fluid={file.childImageSharp.fluid} />
        </div>
    )
}

export default BackgroundLogo
