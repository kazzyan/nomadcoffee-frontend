import styled from "styled-components";

import { darkModeVar, isLoggedInVar } from "../apollo";

const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};
`;


function Home() {
    return (
        <Container>
            <Title>Home</Title>
            <button onClick={() => darkModeVar(true)}>To dark</button>
            <button onClick={() => darkModeVar(false)}>To light</button>
            <button onClick={() => isLoggedInVar(false)}>
                Log out now!
            </button>
        </Container>
    );
}

export default Home;
