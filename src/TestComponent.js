import React from "react";

const TestComponent = ( { oggetto }) => {
    return(
        <React.Fragment>
            <span>{oggetto.a}---</span>
            <span>{oggetto.b}---</span>
            <span>{oggetto.c}---</span>
            <span>{oggetto.d}</span>
        </React.Fragment>
    )
}

export default TestComponent