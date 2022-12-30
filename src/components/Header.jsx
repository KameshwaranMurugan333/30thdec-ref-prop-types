import React from "react";
import PropTypes from "prop-types";

export const Header = (props) => {
    return <div>
        <h1>{props.heading}</h1>
        <h1>{props.subHeading}</h1>
        <p>{props.default}</p>
    </div>
}

Header.defaultProps = {
    default: 10
}

Header.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
    default: PropTypes.number
}