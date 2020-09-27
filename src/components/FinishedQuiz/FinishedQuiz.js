import React from 'react'
import './FinishedQuiz.css'

const FinishedQuiz = props => {
const successCount = Object.keys(props.results).reduce((total, key)=>{
    if(props.results[key]==='success'){
        total++
    }
    return total
},0)

    return (
        <div className='FinishedQuiz'>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    let cls = ''
                    let total = 0
                    if (props.results[quizItem.id] === 'error') { cls = 'fa fa-times' }
                    else {cls = 'fa fa-check'}

                    return (
                        <li key={index}>
                            <strong>{index + 1}.</strong> &nbsp;
                            {quizItem.question} &nbsp;
                            <i className={cls} />

                        </li>
                    )
                })}
            </ul>
            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <button 
                onClick={()=>props.onRetryClick()}
                className='Retry'
                >Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz