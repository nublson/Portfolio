import React from 'react'
import rehypeReact from 'rehype-react'
import { useStaticQuery, graphql } from 'gatsby'

import { AboutText, StackTitle, Stack } from './style'

import {
    StyledSection,
    Container,
    Wrapper,
} from '../../components/Layout/elements'
import { Heading } from '../../components/UI/Heading'
import { Border, Evidence, Link } from '../../components/UI/textStyles'

// Takes custom components from markdown, and maps to my custom components
const renderCustom = new rehypeReact({
    createElement: React.createElement,
    components: { span: Border, em: Evidence, a: Link },
}).Compiler

const About = () => {
    const { aboutMe } = useStaticQuery(graphql`
        query {
            aboutMe: file(relativePath: { eq: "aboutMe.md" }) {
                childMarkdownRemark {
                    frontmatter {
                        stack
                    }
                    htmlAst
                }
            }
        }
    `)

    return (
        <StyledSection id="about">
            <Container>
                <Wrapper>
                    <Heading
                        title="About Me"
                        subTitle="Investing in knowledge always yields the best profits."
                    />

                    <AboutText>
                        {renderCustom(aboutMe.childMarkdownRemark.htmlAst)}

                        <StackTitle>
                            I am currently <Border>able to work</Border> with:
                        </StackTitle>
                        <Stack>
                            {' '}
                            {aboutMe.childMarkdownRemark.frontmatter.stack}{' '}
                        </Stack>
                    </AboutText>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default About
