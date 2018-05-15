const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
const GET_VOTE = 'GET_VOTE'
const NEW_QUESTION = 'NEW_QUESTION'

const receiveQuestions = (questions) => {
    return ({
        type: RECEIVE_QUESTIONS,
        questions
    })
}

const getVote = (userId, questionId, option) => {
    return ({
        type: GET_VOTE,
        userId,
        questionId,
        option
    })
}

const newQuestion = (question) => {
    return ({
        type: NEW_QUESTION,
        question
    })
}

export { RECEIVE_QUESTIONS, GET_VOTE, NEW_QUESTION, receiveQuestions, getVote, newQuestion }