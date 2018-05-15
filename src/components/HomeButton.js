import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomeButton extends Component{
    render () {
        return (
            <Link to='/' className='btn btn-info'>
                Home
            </Link>
        )
    }
}

export default HomeButton