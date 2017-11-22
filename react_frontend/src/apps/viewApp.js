import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {Row} from 'react-flexbox-grid'
import ListQuestions from '../components/format/listQuestions'
import ListQuizzes from '../components/format/listQuizzes'

class ViewRouter extends React.Component {
  render() {
    return(
      <Row>
        <Route
          exact path='/viewApp/questions'
          component={ListQuestions}/>
        <Route
          exact path='/viewApp/quizzes'
          component={ListQuizzes}/>
      </Row>
    )
  }
}

class ViewSwitcher extends React.Component {
  render() {
    return(
      <Switch>
        <Row>
          <Link to='/viewApp/questions'>questions|</Link>
          <Link to='/viewApp/quizzes'>quizzes</Link>
        </Row>
      </Switch>
    )
  }
}

class ViewApp extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <ViewSwitcher/>
          <ViewRouter/>
        </div>
      </BrowserRouter>
    )
  }
}

export default ViewApp
