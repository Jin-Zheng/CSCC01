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
      </Switch>
    )
  }
}

export default MainSwitcher
