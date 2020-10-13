import React from 'react'
import './Button.css'

const Button = props => {
    // let cls = (props.type)
    
    return (
        <button 
        className={'Button ' + props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button