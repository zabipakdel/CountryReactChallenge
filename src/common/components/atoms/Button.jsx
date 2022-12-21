import React from "react"


export default ({children, onClick, ...props}) => {
    return (
        <button {...props} onClick={onClick}>
            {children}
        </button>
    )
}