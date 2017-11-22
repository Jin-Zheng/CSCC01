import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {Row} from 'react-flexbox-grid'
import InstructorApp from './instructorApp'
import Styles from '../styles'

class LoginRouter extends React.Component {
  render() {
    return(
      <Row>
        Login as:
        <Link to='/instructor'>Instructor|</Link>
        <Link to='/student'>Student</Link>
      </Row>
    )
  }
}

class LoginSwitcher extends React.Component {
 render() {
   return(
     <Switch>
      <Route
        exact path='/instructor'
        component={InstructorApp}/>
      <Route
        exact path='/student'/>
     </Switch>
   )
 }
}

class LoginApp extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div  style={Styles.backgroundSet}>
          <LoginRouter/>
          <LoginSwitcher/>
        </div>
      </BrowserRouter>
    )
  }
}

export default LoginApp
