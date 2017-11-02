import React from 'react'
import {Route, Switch} from 'react-router-dom'
import McEditor from './mcEditor'
import InstructorSignUp from './instructorSignUp'
import CreateMultipleChoice from './createMultipleChoice'
import CreateShortAnswer from './createShortAnswer'

class MainContents extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          exact path='/'
          component={McEditor}/>
        <Route
          exact path='/createMultipleChoice'
          component={CreateMultipleChoice}/>
        <Route
          exact path='/createShortAnswer'
          component={CreateShortAnswer}/>
        <Route
          exact path='/mcEditor'
          component={McEditor}/>
        <Route
          exact path='/instructorSignUp'
          component={InstructorSignUp}/>
      </Switch>
    )
  }
}

export default MainContents
