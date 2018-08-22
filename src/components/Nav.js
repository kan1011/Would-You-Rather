import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authedUser'

class Nav extends Component {
    logout = () => {
        const { dispatch } = this.props
        dispatch(logoutUser())
    }

    render () {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='navbar-nav w-100 order-0'>
                    <NavLink to='/' exact activeClassName='active' className='nav-item nav-link'>
                        Home
                    </NavLink>
                    <NavLink to='/add' activeClassName='active' className='nav-item nav-link'>
                        Add Question
                    </NavLink>
                    <NavLink to='/leaderboard' activeClassName='active' className='nav-item nav-link'>
                        Leaderboard
                    </NavLink>
                    
                </div>
                <div className='navbar-nav'>
                    <Link className='navbar-text w-100 px-3 order-3' onClick={this.logout} to='/'>
                        Log-Out
                    </Link>
                </div>
            </nav>
        )
    }
}

export default connect()(Nav)