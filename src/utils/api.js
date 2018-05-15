import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA'

const getInitialData = () => {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => {
        return (
            {
                users,
                questions
            }

            // it will return object that contain users, questions
        )
    })
}

const saveQuestion = (new_question) => { // new_question need to include :author, :optionOneText, :optionTwoText
    return _saveQuestion(new_question)

    // it will return a question object with id, author, optionOne, optionTwo, timestamp
}

const saveQuestionAnswer = (answer) => { // answer need to include :authedUser, :qid, :answer
    return _saveQuestionAnswer(answer)

    // no return
}

export { getInitialData, saveQuestion, saveQuestionAnswer }