import React from 'react'
import './Button.css'

const Button = props => {
    const cls = ['Button']
    if(props.disabled){
        cls.push('disabled')
    } else{
        cls.push(props.type)
    }
    return (
        <button 
        className={cls.join(' ') }
        onClick={props.onClick}
        disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button