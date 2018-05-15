import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UserInfo from './UserInfo'
import HomeButton from './HomeButton'

class LeaderBoardPage extends Component {

    

    render () {
        const { authedUser, usersId, users } = this.props

        if (authedUser===null || authedUser===undefined){
            console.log('You are not logged-in')
            return <Redirect to={{
                pathname: '/login',
                state: { redirectTo: '/leaderboard'} 
            }}/>
        }

        return (
            <div className='text-center'>
                <h3>Leaderboard</h3>
                <div>
                    <table className='table table-striped border'>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Asked</th>
                                <th>Answered</th>
                            </tr>
                        </thead>
                        <tbody>
                        {usersId.map((userId) => {
                            return (
                                <tr key={userId}>
                                    <td><UserInfo userId={userId}/></td>
                                    <td>{users[userId].questions.length}</td>
                                    <td>{Object.keys(users[userId].answers).length}</td>
                                </tr>
                            )
                        })
                        }
                        </tbody>
                    </table>
                </div>

                <div className='btn-div'>
                    <HomeButton/>
                </div>
            </div>
        )
    }
}

const sumOfAskAndAnswer = (users, userId) => {
    const ask = users[userId].questions.length
    const answer = Object.keys(users[userId].answers).length

    return ask + answer
}

const mapStateToProps = (states) => {
    const { authedUser, users } = states

    return ({
        authedUser,
        usersId: Object.keys(users).sort((a,b) => sumOfAskAndAnswer(users, b) - sumOfAskAndAnswer(users, a) ),
        users
    })
}

export default connect(mapStateToProps)(LeaderBoardPage)