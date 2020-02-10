import React from 'react'

import { ExternalButton } from '../../components/UI/ExternalButton'
import {
    StyledSection,
    Container,
    Wrapper,
} from '../../components/Layout/elements'
import { Heading } from '../../components/UI/Heading'
import { SocialIcons } from '../../components/UI/icons'

const Contact = () => {
    return (
        <StyledSection id="contact">
            <Container>
                <Wrapper>
                    <Heading
                        title="Contact Me"
                        subTitle="It is better to hire an enthusiastic man than a man who knows everything."
                    />

                    <SocialIcons />

                    <ExternalButton
                        to="nubelsondev@hotmail.com"
                        text="Say Hello!"
                        type="empty"
                    />
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default Contact
