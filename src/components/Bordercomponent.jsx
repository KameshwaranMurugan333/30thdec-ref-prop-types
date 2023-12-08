import React from "react";

export const BorderComponent = (props) => {
    return <div style={{border: "5px solid red"}}>
        {props.children}
    </div>
}