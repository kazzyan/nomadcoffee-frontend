import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { BaseBox } from "../shared";

const StyledBottomBox = styled(BaseBox)`
`;

const BottomBox = ({ cta, link, linkText }) => {
    return (
        <StyledBottomBox>
            <span>{cta}</span>
            <Link to={link}>{linkText}</Link>
        </StyledBottomBox>
    );
}

BottomBox.propTypes = {
    cta: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
};

export default BottomBox;

