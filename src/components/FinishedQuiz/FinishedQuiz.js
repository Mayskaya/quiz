import React from 'react'
import Button from '../UI/Button/Button'
import './FinishedQuiz.css'
import { Link } from 'react-router-dom'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className='FinishedQuiz'>
            <h1 className='Results'>Результаты</h1>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    let cls = ''
                    // let total = 0
                    if (props.results[quizItem.id] === 'error') { cls = 'fa fa-times' }
                    else { cls = 'fa fa-check' }

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
                <Button
                    onClick={() => props.onRetryClick()}
                    type='retry'>
                    Повторить</Button>
                <Link to='/'>
                    <Button
                        type='question_list'>
                        Перейти к списку тестов</Button>
                </Link>

            </div>
        </div>
    )
}

export default FinishedQuiz