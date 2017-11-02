import React from 'react'
import {Link} from 'react-router-dom'
import FormatListView from '../components/format/formatListView'
import {List} from 'immutable'

class MainRouter extends React.Component{
  render() {
    const linksList = List([
      <Link to='/'>
        home
      </Link>,
      <Link to='/generate'>
        generate
      </Link>,
      <Link to='/createMultipleChoice'>
        create multiple choice
      </Link>,
      <Link to='/createShortAnswer'>
        create short answer
      </Link>,
      <Link to='/mcEditor'>
        mc editor
      </Link>,
      <Link to='/shortAnswerEditor'>
        short answer editor
      </Link>,
      <Link to='/multipleAnswerDisplay'>
        multiple answer display
      </Link>,
      <Link to='/shortAnswerDisplay'>
        shortAnswerDisplay
      </Link>,
      <Link to='/instructorSignUp'>
        instructor sign up
      </Link>,
      <Link to='/studentSignUp'>
        student sign up
      </Link>
    ])
    return (
      <FormatListView list={linksList}/>
    )
  }
}

export default MainRouter
