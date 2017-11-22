import React from 'react'
import {Row} from 'react-flexbox-grid'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Styles from '../styles'
import CreateShortAnswer from '../components/question/createShortAnswer'
import CreateMultipleChoice from '../components/question/createMultipleChoice'
import SelectQuestions from '../components/quiz/selectQuestions'

class GenerateRouter extends React.Component {
  render() {
    return(
      <Row>
        <Link to='/generateApp/createShortAnswer'
          >
          short answer|
        </Link>
        <Link to='/generateApp/createMultipleChoice'
          >
          multiple choice|
        </Link>
        <Link to='/generateApp/createQuiz'>
          quiz
        </Link>
      </Row>
    )
  }
}

class GenerateSwitcher extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          exact path='/generateApp/createShortAnswer'
          component={CreateShortAnswer}/>
        <Route
          exact path='/generateApp/createMultipleChoice'
          component={CreateMultipleChoice}/>
        <Route
          exact path='/generateApp/createQuiz'
          component={SelectQuestions}/>
      </Switch>
    )
  }
}

class GenerateApp extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <GenerateRouter/>
          <GenerateSwitcher/>
        </div>
      </BrowserRouter>
    )
  }
}

export default GenerateApp
