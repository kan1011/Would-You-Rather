import { RECEIVE_USERS, ANSWER_VOTE, SET_QUESTION } from '../actions/users'

const users = (users={}, action) => {
    switch(action.type) {
        case RECEIVE_USERS:
            return (
                {
                    ...users,
                    ...action.users
                }
            )

        case ANSWER_VOTE: 
            return ({
                ...users,
                [action.userId]: {
                    ...users[action.userId],
                    answers: {
                        ...users[action.userId].answers,
                        [action.questionId]: action.option
                    }
                }
            })

        case SET_QUESTION:
            return ({
                ...users,
                [action.authorId]: {
                    ...users[action.authorId],
                    questions: users[action.authorId].questions.concat(action.questionId)
                }
            })
        
        default:
            return users
    }
}

export default users