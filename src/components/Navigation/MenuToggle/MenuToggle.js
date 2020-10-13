import React from 'react'
import './MenuToggle.css'

const MenuToggle = props => {
    let cls = '';
    if(props.isOpen){
        cls = '-open fa fa-times'
    }else{
        cls = ' fa fa-bars'
    }
    // let cls = (props.isOpen) ? '.open fa fa-times' : ' fa fa-bars'
    return (
        <i className={'MenuToggle' + cls}
        onClick={props.onToggle}
        />
    )
}

export default MenuToggle