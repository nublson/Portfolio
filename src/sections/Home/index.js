import React from 'react'
import { useSpring, config } from 'react-spring'
import {
    StyledSection,
    Container,
    Wrapper,
} from '../../components/Layout/elements'

import { SmallWrapper, Title, SubTitle } from './styles'
import { Button } from '../../components/UI/Buttons'
import { BorderAnimated } from '../../components/UI/textStyles'
import { ArrowDown } from '../../components/UI/icons'
import BackgroundLogo from '../../components/UI/BackgroundLogo'

const Home = () => {
    // Title animation
    const TitleSpring = useSpring({
        config: config.wobbly,
        delay: 200,
        opacity: 1,
        transform: 'translateX(0px)',
        from: { opacity: 0, transform: 'translateX(40px)' },
    })

    // Sub title animation
    const SubTitleSpring = useSpring({
        config: config.stiff,
        delay: 300,
        opacity: 1,
        transform: 'translateY(0px)',
        from: { opacity: 0, transform: 'translateY(40px)' },
    })

    // Button animation
    const ButtonSpring = useSpring({
        config: config.stiff,
        delay: 600,
        opacity: 1,
        from: { opacity: 0 },
    })

    return (
        <StyledSection fullHeight id="home">
            <BackgroundLogo />
            <Container>
                <Wrapper>
                    <SmallWrapper>
                        <Title style={TitleSpring}>
                            <span>Nubel</span>son<span>.</span> <br />{' '}
                            <span className="role">Full-Stack Developer</span>
                        </Title>
                        <SubTitle style={SubTitleSpring}>
                            A self-taught developer specializing in creating (
                            <BorderAnimated>UI/UX</BorderAnimated>) and building
                            things for <BorderAnimated>Web</BorderAnimated> and{' '}
                            <BorderAnimated>Mobile</BorderAnimated> devices.
                        </SubTitle>
                        <Button
                            style={ButtonSpring}
                            to="contact"
                            text="Get in Touch"
                            type="full"
                        />
                    </SmallWrapper>
                </Wrapper>
            </Container>
            <ArrowDown />
        </StyledSection>
    )
}

export default Home
