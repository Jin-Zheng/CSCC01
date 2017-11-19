import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {Row} from 'react-flexbox-grid'

class ViewRouter extends React.Component {
  render() {
    return(
      <Row>
        <Route
          exact path='/viewApp/questions'
          component={listQuestions}/>
        <Route
          exact path='/viewApp/quizzes'
          component={listQuizzes}/>
      </Row>
    )
  }
}

class ViewSwitcher extends React.Component {
  render() {
    return(
      <Switch>
        <Row>
          <Link to='/viewApp/questions'>questions</Link>
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
        <ViewRouter/>
        <ViewSwitcher/>
      </BrowserRoute>
    )
  }
}
