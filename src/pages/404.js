import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import {
    StyledSection,
    Container,
    Wrapper,
} from "../components/Layout/elements"
import { Heading } from "../components/UI/Heading"
import NotFoundSVG from "../images/not_found.svg"

const StyledLink = styled(Link)`
    outline: none;
    background: transparent;
    color: var(--primary);
    text-transform: uppercase;
    text-decoration: none;
    font-family: inherit;
    display: flex;
    align-items: center;
    font-weight: 700;
    letter-spacing: 1.5px;
    border: 1px solid;
    border-radius: 10rem;
    font-size: 1rem;
    padding: 1.4rem 3.5rem;
    margin: 0rem;
    cursor: pointer;
    box-shadow: "none";
    transition: all 0.2s ease-out;
    &:hover {
        transform: translateY(-3px);
    }
    &:active {
        transform: translateY(1px);
    }
    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 1rem;
        padding: 1.5rem 3.5rem;
    }
    @media ${props => props.theme.mediaQueries.small} {
        padding: 1.3rem 3.2rem;
    }
`

const Svg = styled.img`
    max-width: 100%;
    height: 30vh;
    margin-bottom: 10rem;
`

const NotFoundPage = () => (
    <Layout notOnePageSection>
        <StyledSection fullHeight>
            <Container>
                <Wrapper>
                    <Heading
                        title="Page not found"
                        subTitle="Uppps! This page doesn't exist"
                    />
                    <Svg src={NotFoundSVG} alt="404 Page not found" />
                    <StyledLink to="/">Go home</StyledLink>
                </Wrapper>
            </Container>
        </StyledSection>
    </Layout>
)

export default NotFoundPage
