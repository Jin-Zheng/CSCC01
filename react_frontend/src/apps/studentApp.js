import React from 'react'
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom'
import {Row, Col} from 'react-flexbox-grid'
import ListWriteQuiz from '../components/format/listWriteQuiz'
import StudentInstructions from '../instructions/studentInstructions'
import Styles from '../styles'

class StudentSwitcher extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          exact path='/student/writeQuiz'
          component={ListWriteQuiz}/>
        <Route
          component={StudentInstructions}/>
      </Switch>
    )
  }
}

class StudentRouter extends React.Component {
  render() {
    return(
      <div>
        <Row>
          <Link to='/student/writeQuiz'>
            <button style={Styles.indexButton}>
              Write Quiz
            </button>
          </Link>
        </Row>
      </div>
    )
  }
}

class StudentApp extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Row center={'xs'}>
          <Col xs={3} sm={3} md={3} lg={3}>
            <StudentRouter/>
          </Col>
          <Col xs={7} sm={7} md={7} lg={7}>
            <StudentSwitcher/>
          </Col>
        </Row>
      </BrowserRouter>
    )
  }
}

export default StudentApp
