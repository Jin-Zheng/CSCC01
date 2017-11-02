import React from 'react'
import {Route, Switch} from 'react-router-dom'
import McEditor from '../components/question/mcEditor'
import InstructorSignUp from '../components/signup/instructorSignUp'
import CreateMultipleChoice from '../components/question/createMultipleChoice'
import CreateShortAnswer from '../components/question/createShortAnswer'
import ShortAnswerEditor from '../components/question//shortAnswerEditor'
import MultipleAnswerDisplay from '../components/question/mulitipleAnswerDisplay'
import ShortAnswerDisplay from '../components/question/shortAnswerDisplay'
import StudentSignUp from '../components/signup/studentSignUp'
import GenerateRouter from '../routers/generateRouter'

class MainSwitcher extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          exact path='/'/>
        <Route
          exact path='/generate'
          component={GenerateRouter}/>
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
          exact path='/shortAnswerEditor'
          component={ShortAnswerEditor}/>
        <Route
          exact path='multipleAnswerDisplay'
          component={MultipleAnswerDisplay}/>
        <Route
          exact path='/shortAnswerDisplay'
          component={ShortAnswerDisplay}/>
        <Route
          exact path='/instructorSignUp'
          component={InstructorSignUp}/>
        <Route
          exact path='/studentSignUp'
          component={StudentSignUp}/>
      </Switch>
    )
  }
}

export default MainSwitcher
