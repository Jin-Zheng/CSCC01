import React from 'react'
import Styles from '../styles'
import {Row, Col} from 'react-flexbox-grid'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import GenerateApp from '../apps/generateApp'
import SignUpApp from '../apps/signUpApp'
import {List} from 'immutable'
import FormatListView from '../components/format/formatListView'
import ListQuestions from '../components/format/listQuestions'
import ViewApp from './viewApp'
import QuizAttemptsApp from './quizAttemptsApp'

class InstructorRouter extends React.Component{
  render() {
<<<<<<< HEAD
    const linksList = List([
      <Link to='/'>
          home
      </Link>,
      <Link to='/generateApp'>
          generate
      </Link>,
      <Link to='/viewApp'>
          view/edit
      </Link>,
      <Link to='/signUpApp'>
          sign up
      </Link>,
    ])
=======
>>>>>>> master
    return (
      <div>
        <Row>
          <Link to='/instructor/generateApp'>

            generate
          </Link>
        </Row>
        <Row>
          <Link to='/instructor/viewApp'>
              view/edit
          </Link>
        </Row>
        <Row>
          <Link to='/instructor/attemptViewApp'>quiz attempt</Link>
        </Row>
      </div>
    )
  }
}

class InstructorSwitcher extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          exact path='/'/>
        <Route
          exact path='/instructor/generateApp'
          component={GenerateApp}/>
        <Route
          exact path='/instructor/viewApp'
          component={ViewApp}/>
        <Route
          exact path='/instructor/attemptViewApp'
          component={QuizAttemptsApp}/>
      </Switch>

    )
  }
}


class InstructorApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
<<<<<<< HEAD
        <div>
          <Row>
            Lambda-Work
          </Row>
=======
        <div >
>>>>>>> master
          <Row center={'xs'}>
            <Col xs={3} sm={3} md={3} lg={3}>
              <InstructorRouter/>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7}>
              <InstructorSwitcher/>
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    )
  }
}

export default InstructorApp
