import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import logo from '../../../images/logo/logo_yellow.svg'

import { Container } from '../../Layout/elements'
import DesktopMenu from './desktopMenu'
import MobileMenu from './mobileMenu/mobileMenu'

const StyledHeader = styled(animated.header)`
    position: fixed;
    width: 100%;
    max-width: 100vw;
    top: 0;
    left: 0;
    z-index: 20;
    background: var(--nav-bar);
    box-shadow: 0 0.5rem 2rem var(--shadow-color);
    transition: background 0.2s ease-out;
`

const LogoWrapper = styled(Link)`
    height: 5rem;
    cursor: pointer;
`

const Logo = styled.img`
    height: 5rem;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    overflow-x: hidden;
    justify-content: space-between;
    transition: all 0.2s ease-out;
    user-select: none;
    height: ${({ isMobile }) => (isMobile ? '6rem' : '7rem')};
    @media ${({ theme }) => theme.mediaQueries.small} {
        position: relative;
    }
`

const Navbar = ({ notOnePageSection, toogleTheme, theme }) => {
    const [isMobile, setisMobile] = useState(null)
    const [menuOpened, setMenuOpened] = useState(false)

    // Animation
    const NavBarSpring = useSpring({
        config: config.wobbly,
        opacity: 1,
        height: isMobile ? '6rem' : '7rem',
        from: {
            opacity: 0,
            height: '0rem',
        },
    })

    // Change navbar content accordingly
    const changeMobile = () => {
        window.matchMedia('(max-width: 37.5em)').matches
            ? setisMobile(true)
            : setisMobile(false)
    }

    // Event listener on resize, so when it change we check o remove desktop menu/mobile menu
    // Better than CSS media query because we dont keep both DOM nodes
    useEffect(() => {
        changeMobile()
        window.addEventListener('resize', changeMobile)
        return () => window.removeEventListener('resize', changeMobile)
    }, [])

    return (
        <StyledHeader style={NavBarSpring}>
            <Container>
                <Wrapper isMobile={isMobile}>
                    <LogoWrapper
                        notOnePageSection={notOnePageSection}
                        setMenuOpened={setMenuOpened}
                        to="home"
                        spy={true}
                        smooth={true}
                    >
                        <Logo src={logo} />
                    </LogoWrapper>
                    {isMobile ? (
                        <MobileMenu
                            toogleTheme={toogleTheme}
                            theme={theme}
                            notOnePageSection={notOnePageSection}
                            menuOpened={menuOpened}
                            setMenuOpened={setMenuOpened}
                        />
                    ) : (
                        <DesktopMenu
                            toogleTheme={toogleTheme}
                            theme={theme}
                            notOnePageSection={notOnePageSection}
                        />
                    )}
                </Wrapper>
            </Container>
        </StyledHeader>
    )
}

Navbar.propTypes = {
    siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
    siteTitle: ``,
}

export default Navbar
