import React from 'react'
import {Row} from 'react-flexbox-grid'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import InstructorSignUp from '../components/signup/instructorSignUp'
import StudentSignUp from '../components/signup/studentSignUp'

class SignUpSwitcher extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          exact path='/SignUpApp/InstructorSignUp'
          component={InstructorSignUp}/>
        <Route
          exact path='/SignUpApp/StudentSignUp'
          component={StudentSignUp}/>

      </Switch>
    )
  }
}

class SignUpRouter extends React.Component {
  render() {
    return(
      <Row>
        <button>
          <Link to='/SignUpApp/InstructorSignUp'>
            instructor sign up
          </Link>
        </button>
        |
        <button>
          <Link to='/SignUpApp/StudentSignUp'>
            student sign up
          </Link>
        </button>
      </Row>
    )
  }
}

class SignUpApp extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <SignUpRouter/>
          <SignUpSwitcher/>
        </div>
      </BrowserRouter>
    )
  }
}

export default SignUpApp
