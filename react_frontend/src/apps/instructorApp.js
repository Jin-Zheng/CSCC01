import React from 'react'
import Styles from '../styles'
import {Row, Col} from 'react-flexbox-grid'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import GenerateApp from '../apps/generateApp'
import SignUpApp from '../apps/signUpApp'
import {List} from 'immutable'
import FormatListView from '../components/format/formatListView'
import ListQuestions from '../components/format/listQuestions'

class MainRouter extends React.Component{
  render() {
    return (
      <div>
        <Row>
          <Link to='/instructor/generateApp'>generate</Link>
        </Row>
        <Row>
          <Link to='/instructor/viewApp'>view/edit</Link>
        </Row>
      </div>
    )
  }
}

class MainSwitcher extends React.Component {
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
          component={ListQuestions}/>
        <Route
          exact path='/signUpApp'
          component={SignUpApp}/>
      </Switch>

    )
  }
}


class MainApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Row center={'xs'}>
            <Col xs={3} sm={3} md={3} lg={3}>
              <MainRouter/>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7}>
              <MainSwitcher/>
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    )
  }
}

export default MainApp
