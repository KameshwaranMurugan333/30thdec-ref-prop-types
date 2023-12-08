import React from "react";
import PropTypes from "prop-types";

export const Header = (props) => {
    return <div>
        <h1>{props.heading}</h1>
        <h1>{props.subHeading}</h1>
        <p>{props.count}</p>
    </div>
}

Header.defaultProps = {
    count: 10
}

Header.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
    count: PropTypes.number
}