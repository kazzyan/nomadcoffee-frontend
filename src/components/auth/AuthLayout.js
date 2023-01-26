import { useReactiveVar } from "@apollo/client";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { darkModeVar, offDarkMode, onDarkMode } from "../../apollo";

const Container = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Wrap = styled.div`
    max-width: 350px;
    width: 100%;
`;

const Footer = styled.footer`
    display: grid;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 10vh;
`;

const ToggleModeBtn = styled.span`
    cursor: pointer;
`;


const AuthLayout = ({ children }) => {
    const darkMode = useReactiveVar(darkModeVar);

    return (
        <Container>
            <Wrap>
                { children }
            </Wrap>
            <Footer>
                <ToggleModeBtn onClick={darkMode ? offDarkMode : onDarkMode}>
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </ToggleModeBtn>
            </Footer>
        </Container>
    );
} 

export default AuthLayout;

