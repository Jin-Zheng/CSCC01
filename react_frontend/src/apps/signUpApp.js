import React from 'react'
import SignUpSwitcher from '../switchers/signUpSwitcher'
import SignUpRouter from '../routers/sighUpRouter'
import {Row} from 'react-flexbox-grid'
import {BrowserRouter} from 'react-router-dom'

class SignUpSwitcher extends React.Component {

}

class SignUpRouter extends React.Component {

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
