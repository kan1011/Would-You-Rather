import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfo from './UserInfo'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class LoginPage extends Component{
    login = (e, userId) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(setAuthedUser(userId))    
    }

    render() {
        const { usersId, authedUser }  = this.props
        let redirectTo = null

        this.props.location.state &&
            (redirectTo = this.props.location.state.redirectTo)

        if (authedUser !== null){
            console.log('Logged-in!!')
            return (redirectTo===undefined || redirectTo===null ? <Redirect to='/'/> : <Redirect to={redirectTo} />)
        }

        return (
            <div className="text-center">
                <div>
                    <h3>Welcome to Would You Rather</h3>
                    <h3>Please Sign-in</h3>
                </div>
                {
                    <div>
                            {usersId.map((userId) => {
                                return(
                                    <div key={userId} className='border login-user' onClick={(e) => this.login(e, userId)}>
                                        <UserInfo userId={userId}/>
                                    </div>
                                )
                            })}
                    </div>
                }  
            </div>
        )
    }
}

const mapStateToProps = (states) => {
    const { users, authedUser } = states

    return {
        usersId: Object.keys(users),
        authedUser,
    }
}

export default connect(mapStateToProps)(LoginPage)