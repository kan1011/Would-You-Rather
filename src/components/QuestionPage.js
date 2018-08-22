import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleVote } from '../actions/shared'
import HomeButton from './HomeButton'

class QuestionPage extends Component{

    vote = (option) => {
        const { question_id, authedUser, dispatch } = this.props

        dispatch(handleVote({authedUser, qid: question_id, answer: option}))
    }

    render () {
        const { question, question_id, authedUser, users } = this.props
        console.log('question', question)

        if (authedUser === null){
            return (
                <Redirect to={{
                    pathname: '/login',
                    state: { redirectTo: `/questions/${question_id}`}
                }}/>
            )
        }

        if (question === undefined){
            return (
                <Redirect from='*' to='/404notfound'/>
            )
        }

        const { author, optionOne, optionTwo } = question
        const { name, avatarURL } = users[author]
        const { answers } = users[authedUser]
        
        const answered = Object.keys(answers).includes(question_id)

        const totalVotes = optionOne.votes.length + optionTwo.votes.length
        const onePercentage = (optionOne.votes.length/totalVotes) * 100
        const twoPercentage = (optionTwo.votes.length/totalVotes) * 100

        return (
            <div className='text-center'>
                <img src={avatarURL} alt={`Avatar of ${name}`} className='question-avatar rounded-circle'/>
                <h4>{name}</h4>

                <h3>Would You Rather ... </h3>

                {answered
                    ?   <div className='row'>
                            <div className={`col question-option question-option-answered border ${answers[question_id] === 'optionOne' && ('user-answer')} `}>
                                <div className='row'>{optionOne.text}</div>
                                <div className='row'><u>{optionOne.votes.length} votes ({onePercentage}%)</u></div>
                            </div>
                            <div className={`col question-option question-option-answered border' ${answers[question_id] === 'optionTwo' && ('user-answer')}`}>
                                <div className='row'>{optionTwo.text}</div>
                                <div className='row'><u>{optionTwo.votes.length} votes ({twoPercentage}%)</u></div>
                            </div>
                        </div>

                    :   <div className='row'>
                            <div className='col question-option border' onClick={() => {this.vote('optionOne')}}>
                                <div className='row'>{optionOne.text}</div>
                            </div>
                            <div className='col question-option border' onClick={() => {this.vote('optionTwo')}}>
                                <div className='row'>{optionTwo.text}</div>
                            </div>
                        </div>
                }

                <div className='btn-div'>
                    <HomeButton/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (states, props) => {
    const { authedUser, users, questions } = states
    const { question_id } = props.match.params
    const question = questions[question_id]

    return ({
        question,
        question_id,
        authedUser,
        users
    })
}

export default connect(mapStateToProps)(QuestionPage)