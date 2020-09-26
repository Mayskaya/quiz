import React, { Component } from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
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
        console.log('answer id', answerId)

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: { [answerId]: 'success' }
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null,
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)

        } else {
            this.setState({
                answerState: { [answerId]: 'error' }
            })
        }

    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className='Quiz'>

                <div className='QuizWrapper'>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>

            </div>
        );
    }
}

export default Quiz