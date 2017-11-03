import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import {BrowserRouter} from 'react-router-dom'
import MultipleAnswerDisplay from '../components/question/multipleAnswerDisplay'
import ShortAnswerDisplay from '../components/question/shortAnswerDisplay'
import ViewRouter from '../routers/viewRouter'
import ViewSwitcher from '../switchers/viewSwitcher'

class ViewApp extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <ViewRouter/>
          <ViewSwitcher/>
        </div>
      </BrowserRouter>
    )
  }
}

class ViewRouter extends React.Component {
  render() {
    return(
      <Row>
          <Link to='/viewApp/shortAnswerDisplay'>
            short answer|
          </Link>
          <Link to='/viewApp/mulitipleAnswerDisplay'>
            multiple choice
          </Link>
      </Row>
    )
  }
}


class ViewSwitcher extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          exact path='/viewApp/shortAnswerDisplay'
          component={ShortAnswerDisplay}/>
        <Route
          exact path='/viewApp/multipleAnswerDisplay'
          component={MultipleAnswerDisplay}/>
      </Switch>
    )
  }
}
