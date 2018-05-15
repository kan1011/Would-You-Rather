const SET_AUTHED_USER = 'SET_AUTHED_USER'
const LOGOUT_AUTHED_USER = 'LOGOUT_AUTHED_USER'

const setAuthedUser = (id) => {
    return (
        {
            type: SET_AUTHED_USER,
            userId: id
        }
    )
}

const logoutUser = () => {
    return ({
        type: LOGOUT_AUTHED_USER
    })
}

export { SET_AUTHED_USER, setAuthedUser, LOGOUT_AUTHED_USER, logoutUser }