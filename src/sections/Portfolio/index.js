import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { ProjectSection } from './styles'
import PortfolioItem from '../../components/PortfolioItem'

import {
    StyledSection,
    Container,
    Wrapper,
} from '../../components/Layout/elements'
import { Heading } from '../../components/UI/Heading'

const Portfolio = () => {
    const { allFile: items } = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    sourceInstanceName: { eq: "content" }
                    extension: { eq: "md" }
                    relativeDirectory: { regex: "/portfolio/" }
                }
                sort: { fields: [dir], order: DESC }
            ) {
                edges {
                    node {
                        id
                        childMarkdownRemark {
                            frontmatter {
                                title
                                live
                                source
                                stack
                                image {
                                    childImageSharp {
                                        fluid(maxWidth: 1200, quality: 90) {
                                            ...GatsbyImageSharpFluid_tracedSVG
                                        }
                                    }
                                }
                            }
                            html
                        }
                    }
                }
            }
        }
    `)

    return (
        <StyledSection id="portfolio">
            <Container>
                <Wrapper>
                    <Heading
                        title="Portfolio"
                        subTitle="Theory always ends, sooner or later, murdered by practice."
                    />

                    <ProjectSection>
                        {items.edges.map(item => (
                            <PortfolioItem
                                key={item.node.id}
                                portfolio={item.node.childMarkdownRemark}
                            />
                        ))}
                    </ProjectSection>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default Portfolio
