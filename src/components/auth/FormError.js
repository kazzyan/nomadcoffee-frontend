import styled from "styled-components";

const StyledFormError = styled.span`
    margin: 10px auto;
    font-size: 14px;
    font-weight: bold;
    color: tomato;
`;

const FormError = ({ message }) => {
    return (
        message = null ? null : <StyledFormError>{message}</StyledFormError>
    );
}

export default FormError;


