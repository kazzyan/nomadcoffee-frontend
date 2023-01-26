import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { userLogout } from "../apollo";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import PageTitle from "../components/PageTitle";



const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};
`;


function Home() {
    const history = useHistory();

    return (
        <AuthLayout>
            <PageTitle title="Home" />
            <Title>Home with Login</Title>
            <Button onClick={() => userLogout(history)}>
                Log out now!
            </Button>

        </AuthLayout>
    );
}

export default Home;
