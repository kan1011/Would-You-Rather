const RECEIVE_USERS = 'RECEIVE_USERS'
const ANSWER_VOTE = 'ANSWER_VOTE'
const SET_QUESTION = 'SET_QUESTION'

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

const answerVote = (userId, questionId, option) => {
    return({
        type: ANSWER_VOTE,
        userId,
        questionId,
        option
    })
}

const setQuestion = (authorId, questionId) => {
    return({
        type: SET_QUESTION,
        authorId,
        questionId
    })
}

export { RECEIVE_USERS, ANSWER_VOTE, SET_QUESTION, receiveUsers, answerVote, setQuestion }