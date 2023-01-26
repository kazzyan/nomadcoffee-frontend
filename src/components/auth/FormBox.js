import styled from "styled-components";

import { BaseBox } from "../shared";

const StyledFormBox = styled(BaseBox)`
`;

const FormBox = ({ children }) => {
    return (
        <StyledFormBox>
            { children }
        </StyledFormBox>
    );
}

export default FormBox;

