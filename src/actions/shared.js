import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, answerVote, setQuestion } from './users'
import { receiveQuestions, getVote, newQuestion } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then((returnObject) => {
                const { users, questions } = returnObject
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

const handleVote = (answerObj) => {
    // answerObj = {authedUser, qid, answer}
    return (dispatch) => {
        return saveQuestionAnswer(answerObj)
            .then(() => {
                const { authedUser, qid, answer } = answerObj
                dispatch(answerVote(authedUser, qid, answer))
                dispatch(getVote(authedUser, qid, answer))
            })
    }
}

const handleNewQuestion = (questionObj) => {
    const { optionOneText, optionTwoText } = questionObj

    return (dispatch, getState) => {
        const { authedUser } = getState()

        return saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText
        })
            .then((question) => {
                const { id } = question
                dispatch(newQuestion(question))
                dispatch(setQuestion(authedUser, id))
            }
        )
    }
}

export { handleInitialData, handleVote, handleNewQuestion } 