import { RECEIVE_QUESTIONS, GET_VOTE, NEW_QUESTION } from '../actions/questions'

const questions = (questions={}, action) => {
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return(
                {
                    ...questions,
                    ...action.questions
                }
            )

        case GET_VOTE:
            return ({
                ...questions,
                [action.questionId] : {
                    ...questions[action.questionId],
                    [action.option] : {
                        ...questions[action.questionId][action.option],
                        votes: questions[action.questionId][action.option].votes.concat(action.userId)
                    }
                }
            })

        case NEW_QUESTION:
            return ({
                ...questions,
                [action.question.id]: action.question
            })

        default:
            console.log('default question action')
            return questions
    }
}

export default questions