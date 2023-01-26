import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    padding: 8px;
    background-color: #fafafa;
    border: solid 1px ${(props) => (props.hasError ? "tomato" : "#c7c7c7")};
    border-radius: 4px;
`;

export default Input;


