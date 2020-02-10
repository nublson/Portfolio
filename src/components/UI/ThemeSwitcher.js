import React from "react"
import { IconContext } from "react-icons"
import { IoIosSunny, IoIosMoon } from "react-icons/io"
import styled from "styled-components"
import { animated } from "react-spring"

const IconWrapper = styled(animated.div)`
    display: flex;
    cursor: pointer;
    transform: ${({ mobile }) => (mobile ? "scale(1)" : "scale(0.7)")};
    margin: ${({ mobile }) => (mobile ? "1rem 0" : "0")};
    margin-right: ${({ mobile }) => (mobile ? "0rem" : "0.5rem")};
    position: ${({ mobile }) => (mobile ? "relative" : "absolute")};
    right: ${({ mobile }) => (mobile ? null : "0")};
`

const ThemeSwitcher = ({ toogleTheme, theme, mobile }) => {
    return (
        <IconContext.Provider value={{ size: "3.2rem" }}>
            <IconWrapper mobile={mobile} onClick={toogleTheme}>
                {theme.mode.title === "light" ? (
                    <IoIosMoon color="#333" />
                ) : (
                    <IoIosSunny color="#F9D342" />
                )}
            </IconWrapper>
        </IconContext.Provider>
    )
}

export default ThemeSwitcher
