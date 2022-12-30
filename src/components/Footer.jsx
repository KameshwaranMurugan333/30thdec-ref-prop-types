import React from "react";

export const Footer = ({
    heading = "",
    subHeading = "",
    defaultProp = 0,
    ...props
}) => {
    return <div>
        <h1>{heading}</h1>
        <h1>{subHeading}</h1>
        <p>{defaultProp}</p>
    </div>
}