import React from 'react'
import {Row} from 'react-flexbox-grid'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Styles from '../styles'
import CreateShortAnswer from '../components/question/createShortAnswer'
import CreateMultipleChoice from '../components/question/createMultipleChoice'

class GenerateRouter extends React.Component {
  render() {
    return(
      <Row>
        <button style={Styles.indexButton}>
          <Link to='/generateApp/createShortAnswer'
            style={Styles.indexLink}>
            short answer
          </Link>
        </button>
        <button style={Styles.indexButton}>
          <Link to='/generateApp/createMultipleChoice'
            style={Styles.indexLink}>
            multiple choice
          </Link>
        </button>
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
