import React from 'react'
import {Route, Switch} from 'react-router-dom'
import McEditor from './mcEditor'
import InstructorSignUp from './instructorSignUp'

class Main extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={McEditor}/>
        <Route path='/instructorSignUp' component={InstructorSignUp}/>
      </Switch>
    )
  }
}

export default Main
