import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import QuestionPage from './QuestionPage'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import NewQuestionPage from './NewQuestionPage'
import LeaderBoardPage from './LeaderBoardPage'
import Page404 from './Page404'
import Nav from './Nav'

class App extends Component {
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    const { authedUser, users, loading } = this.props

    return (
      <Router>
        <div className="container">
          <LoadingBar/>
          
          {loading === true
            ? <div className="text-center">Loading</div>
            // : authedUser === null
            //     ? <Redirect to='/login'/>
            //     : <Redirect to='/'/> 
            :
              <div>
                <Route path="/" render={ ( props ) => ( props.location.pathname !== "/login") && <Nav />}/>
                <Switch>
                  <Route path='/login' component={LoginPage}/>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/questions/:question_id' component={QuestionPage} />
                  <Route path='/add' component={NewQuestionPage}/>
                  <Route path='/leaderboard' component={LeaderBoardPage} />
                  <Route component={Page404} />
                </Switch>
              </div>
          }
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (states) => {
  const { users, authedUser, loadingBar } = states

  return {
    authedUser,
    users,
    loading: loadingBar.default === 1
  }
}

export default connect(mapStateToProps)(App)
