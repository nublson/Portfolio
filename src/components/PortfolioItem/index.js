import React from 'react'
import { IoIosLink, IoLogoGithub } from 'react-icons/io'

import { Item, Title, Info, Stack, ButtonWrapper, Text, Image } from './styles'

import { BorderStatic } from '../../components/UI/textStyles'
import ButtonLink from '../UI/ButtonLink'

const PortfolioItem = ({ portfolio }) => {
    const { title, live, source, stack, image } = portfolio.frontmatter

    return (
        <Item>
            <Title>
                {' '}
                <BorderStatic> {title} </BorderStatic>{' '}
            </Title>
            <Image fluid={image.childImageSharp.fluid} />
            <Info>
                <Text dangerouslySetInnerHTML={{ __html: portfolio.html }} />

                <Stack>{stack}</Stack>

                <ButtonWrapper>
                    <ButtonLink type="full" url={live}>
                        <IoIosLink size="2rem" />
                        Visit
                    </ButtonLink>
                    <ButtonLink type="empty" url={source}>
                        <IoLogoGithub size="2rem" />
                        Source
                    </ButtonLink>
                </ButtonWrapper>
            </Info>
        </Item>
    )
}

export default PortfolioItem
