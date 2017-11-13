import React from 'react'
import Styles from '../styles'
import {Row, Col} from 'react-flexbox-grid'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import GenerateApp from '../apps/generateApp'
import SignUpApp from '../apps/signUpApp'
import {List} from 'immutable'
import FormatListView from '../components/format/formatListView'
import ViewApp from '../apps/viewApp'
import ListQuestions from '../components/format/listQuestions'


class MainRouter extends React.Component{
  render() {
    const linksList = List([
      <button style={Styles.indexButton}>
        <Link to='/' style={Styles.indexLink}>
          home
        </Link>
      </button>,
      <button style={Styles.indexButton}>
        <Link to='/generateApp' style={Styles.indexLink}>
          generate
        </Link>
      </button>,
      <button style={Styles.indexButton}>
        <Link to='/viewApp' style={Styles.indexLink}>
          view(alpha)
        </Link>
      </button>,
      <button style={Styles.indexButton}>
        <Link to='/signUpApp' style={Styles.indexLink}>
          sign up
        </Link>
      </button>,
    ])
    return (
      <FormatListView list={linksList}/>
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
          exact path='/generateApp'
          component={GenerateApp}/>
        <Route
          exact path='/viewApp'
          component={ListQuestions}/>
        <Route
          exact path='/signUpApp'
          component={SignUpApp}/>
        <Route
          exact path='/questionApi'/>
        <Route
          exact path='/userApi'/>
        <Route
          exact path='/attemptApi'/>
        <Route
          exact path='/quizApi'/>
      </Switch>

    )
  }
}


class MainApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Row style={Styles.title}>
            Lambda-Work
            <p/>
          </Row>
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
