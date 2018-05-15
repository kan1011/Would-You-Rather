import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleNewQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'
import HomeButton from './HomeButton'

class NewQuestionPage extends Component{
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e, option) => {
        const text = e.target.value

        this.setState(() => {
            return ({
                [option]: text
            })
        })
    }

    hanldeSubmit = (e) => {
        e.preventDefault()

        const { dispatch } = this.props
        const { optionOne, optionTwo } = this.state

        dispatch(handleNewQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo
        }))

        this.setState(() => {
            return ({
                optionOne: '',
                optionTwo: '',
                toHome: true
            })
        })
    }

    render() {
        const { optionOne, optionTwo, toHome } = this.state
        const { authedUser } = this.props

        if (authedUser===null || authedUser===undefined){
            console.log('You are not logged-in')
            return <Redirect to={{
                pathname: '/login',
                state: { redirectTo: '/add'} 
            }}/>
        }

        if (toHome === true){
            return <Redirect to='/'/>
        }

        return (
            <div className='text-center'>
                <h3>New Question</h3>
                <div>
                    <h3 className='question-list-heading'>Would You Rather ... </h3>
                    <form onSubmit={this.hanldeSubmit}>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Option One text'
                                value={optionOne}
                                onChange={(e) => {this.handleChange(e, 'optionOne')}}
                            />
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Option Two text'
                                value={optionTwo}
                                onChange={(e) => {this.handleChange(e, 'optionTwo')}}
                            />
                        </div>

                        <button
                            type='submit'
                            className='btn btn-primary mx-5'
                            disabled={optionOne==='' || optionTwo===''}
                        >
                            Submit
                        </button>
                        <HomeButton/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (states) => {
    const { authedUser } = states

    return ({
        authedUser
    })
}
export default connect(mapStateToProps)(NewQuestionPage)