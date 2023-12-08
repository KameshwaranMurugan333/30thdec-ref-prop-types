import React from "react";

export const ChildComponent = React.forwardRef((props, ref) => {

    const focustEmailInputFromChild = () => {
        ref.current.focus();
    }

    const updateParentEmailInputFromChild = () => {
        ref.current.value = "I am updating from child"
    }

    return <div>
        {props.children}
        <button onClick={focustEmailInputFromChild}>Focus the Email Input</button>
        <button onClick={updateParentEmailInputFromChild}>Update the Email Input</button>
    </div>
})