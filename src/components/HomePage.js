import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import QuestionList from './QuestionList'

class HomePage extends Component {
    state = {
        answeredQuestionSelected: false
    }

    toggleButton = (selectAnsweredButton) => {
        this.setState({
            answeredQuestionSelected: selectAnsweredButton
        })
    }

    render () {
        const { authedUser, allQuestions } = this.props
        const { answeredQuestionSelected } = this.state

        if (authedUser===null || authedUser===undefined){
            console.log('You are not logged-in')
            return <Redirect to={{
                pathname: '/login',
                state: { redirectTo: '/'} 
            }}/>
        }

        const { name, answers } = authedUser
        const answeredKeys = Object.keys(answers).sort((a,b) => allQuestions[b].timestamp - allQuestions[a].timestamp)
        const allKeys = Object.keys(allQuestions).sort((a,b) => allQuestions[b].timestamp - allQuestions[a].timestamp)
        const unansweredKeys = allKeys.filter((key) => { return(
            !(answeredKeys.includes(key))
        )})
        

        return (
            <div className='text-center'>
                Hi, {name}
                <div className='btn-group d-block' role='group'>
                    <span className={`btn btn-secondary ${answeredQuestionSelected===false && ('active')}`} onClick={() => {this.toggleButton(false)}}>Unanswered Questions</span>
                    <span className={`btn btn-secondary ${answeredQuestionSelected===true && ('active')}`} onClick={() => {this.toggleButton(true)}}>Answered Questions</span>
                </div>
                {answeredQuestionSelected===true
                    ?   <div>
                            <h3>Answered Questions</h3>
                            <h3 className='question-list-heading'>Would You Rather ... </h3>
                            <QuestionList questionKeys={answeredKeys}/>
                        </div>
                    :   <div>
                            <h3>Unanswered Questions</h3>
                            <h3 className='question-list-heading'>Would You Rather ... </h3>
                            <QuestionList questionKeys={unansweredKeys}/>
                        </div>
                }
                <div className='btn-div'>
                    <Link to='/add' className='btn btn-danger mx-3'>
                        Add Question
                    </Link>

                    <Link to='/leaderboard' className='btn btn-warning mx-3'>
                        LeaderBoard
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (states) => {
    const { authedUser, questions, users } = states

    return ({
        authedUser: users[authedUser],
        allQuestions: questions
    })
}

export default connect(mapStateToProps)(HomePage)