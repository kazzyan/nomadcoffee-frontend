import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    padding: 8px 0;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    background-color: blue;
    border-radius: 4px;
    opacity: ${(props) => (props.disabled ? ".2" : "1")};
`;

export default Button;

