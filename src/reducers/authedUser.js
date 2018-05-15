import { SET_AUTHED_USER, LOGOUT_AUTHED_USER } from '../actions/authedUser'

const authedUser = (authedUser = null, action) => {
    switch(action.type){
        case SET_AUTHED_USER:
            return action.userId

        case LOGOUT_AUTHED_USER:
            return null

        default:
            return authedUser
    }
}

export default authedUser