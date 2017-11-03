import React from 'react'
import Styles from '../styles'
import {Row, Col} from 'react-flexbox-grid'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import GenerateApp from '../apps/generateApp'
import SignUpApp from '../apps/signUpApp'
import {List} from 'immutable'
import FormatListView from '../components/format/formatListView'
import ViewApp from '../apps/viewApp'

class MainRouter extends React.Component{
  render() {
    const linksList = List([
      <Link to='/'>
        home
      </Link>,
      <Link to='/generateApp'>
        generate
      </Link>,
      <Link to='/viewApp'>
        view
      </Link>,
      <Link to='/signUpApp'>
        sign up
      </Link>
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
          component={ViewApp}/>
        <Route
          exact path='/signUpApp'
          component={SignUpApp}/>,
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
