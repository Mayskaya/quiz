import React from 'react'
import './AnswerItem.css'

const AnswerItem = props => {

    let cls = 'AnswerItem'

    if (props.state) {
        if (props.state === 'success') {
            cls = 'success'
        }
        else {
            cls = 'error'
        }
    }

    return (
        <li
            className={cls}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    );
}

export default AnswerItem
