import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionListItem extends Component {
    render () {
        const { questions, questionKey } = this.props 
        const { optionOne, optionTwo } = questions

        return (
            <Link to={`/questions/${questionKey}`} className='row'>
                <div className='col'><span>{optionOne.text}</span></div>
                <div className='col'><span>OR</span></div>
                <div className='col'><span>{optionTwo.text}</span></div>
            </Link>
        )
    }
}

const mapStateToProps = (states, props) => {
    const { questions } = states
    const { questionKey } = props

    return ({
        questions: questions[questionKey],
        questionKey
    })
}

export default connect(mapStateToProps)(QuestionListItem)