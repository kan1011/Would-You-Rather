import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserInfo extends Component {
    render () {
        const { user } = this.props

        return (
            <div>
                <div><img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar'/></div>
                <div><span>{user.name}</span></div>
            </div>
        )
    }
}

const mapStateToProps = (states, props) => {
    const { users } = states
    const { userId } = props 

    return {
        user: users[userId]
    }
}

export default connect(mapStateToProps)(UserInfo)