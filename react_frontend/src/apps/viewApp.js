import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {Row} from 'react-flexbox-grid'
import Styles from '../styles'
import ListQuestions from '../components/format/listQuestions'
import ListQuizzes from '../components/format/listQuizzes'
import ViewInstructions from '../instructions/viewInstructions'

class ViewSwitcher extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          exact path='/viewApp/questions'
          component={ListQuestions}/>
        <Route
          exact path='/viewApp/quizzes'
          component={ListQuizzes}/>
        <Route
          path=''
          component={ViewInstructions}/>
      </Switch>
    )
  }
}

class ViewRouter extends React.Component {
  render() {
    return(
        <Row>
          <Link to='/viewApp/questions'
            style={Styles.subIndexLink}>
            Questions
          </Link>
          <Link to='/viewApp/quizzes'
            style={Styles.subIndexLink}>
            Quizzes
          </Link>
        </Row>
    )
  }
}

class ViewApp extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <ViewRouter/>
          <ViewSwitcher/>
        </div>
      </BrowserRouter>
    )
  }
}

export default ViewApp
