import React, { Component } from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
    state = {
        results: {}, // {[id]: 'success' 'error'}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // {[id]: 'success' 'error'}
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    { id: 1, text: 'Черное' },
                    { id: 2, text: 'Синее' },
                    { id: 3, text: 'Красное' },
                    { id: 4, text: 'Зеленое' },
                ],
            },
            {
                question: 'В каком году основали Санкт-Петербург?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    { id: 1, text: '1700' },
                    { id: 2, text: '1800' },
                    { id: 3, text: '1703' },
                    { id: 4, text: '1803' },
                ],

            },
        ],
    }

    onAnswerClickHandler = (answerId) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: { [answerId]: 'success' },
                results,
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log(results)
                    this.setState({
                        isFinished: true,
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null,
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)

        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: { [answerId]: 'error' },
                results,
            })
        }

    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler=()=> {
        return (this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        }))

    }

    render() {
        return (
            <div className='Quiz'>

                <div className='QuizWrapper'>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetryClick={this.retryHandler}

                            />
                            :
                            <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>

            </div>
        );
    }
}

export default Quiz