import React from 'react'
import Styles from '../styles'
import {Row, Col} from 'react-flexbox-grid'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {List} from 'immutable'
import FormatListView from '../components/format/formatListView'
import ViewQuizApp from './viewQuizApp'

class StudentRouter extends React.Component{
  render() {
    const linksList = List([
      <Link to='/student/ViewQuizApp'>
        <button style={Styles.indexButton}>
          generate
        </button>
      </Link>
    ])
    return (
      <div>
        <Row>
          <Link to='/student/viewQuizApp'>Answer Quiz</Link>
        </Row>
      </div>
    )
  }
}

class StudentSwitcher extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          exact path='/student/viewQuizApp'
          component={ViewQuizApp}/>
      </Switch>

    )
  }
}


class StudentApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={Styles.backgroundSet}>
          <Row style={Styles.title}>
            Lambda-Work
          </Row>
          <Row center={'xs'}>
            <Col xs={3} sm={3} md={3} lg={3}>
              <StudentRouter/>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7}>
              <StudentSwitcher/>
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    )
  }
}

export default StudentApp
