import React from 'react'
import logo from '../../images/logo/logo_white.svg'

import { Container } from '../Layout/elements'

import { StyledFooter, FooterWrapper, FooterContent } from './styles'

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterWrapper>
                    <FooterContent>
                        <img src={logo} alt="Logo" />

                        <p>
                            Designed and Built with{' '}
                            <span role="img" aria-label="Heart emoji">
                                ❤️
                            </span>{' '}
                            and{' '}
                            <span role="img" aria-label="Coffee emoji">
                                ☕
                            </span>{' '}
                            by <br /> Nubelson Fernandes
                        </p>
                    </FooterContent>
                </FooterWrapper>
            </Container>
        </StyledFooter>
    )
}

export default Footer
