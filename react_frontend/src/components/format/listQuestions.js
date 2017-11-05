import React from 'react'
import {List} from 'immutable'
import MultipleAnswerDisplay from '../question/multipleAnswerDisplay'
import ShortAnswerDisplay from '../question/shortAnswerDisplay'
import FormatListView from './formatListView'

const SHORT_ANSWER = 'sa'
const MULTIPLE_CHOICE = 'mc'

class ListQuestions extends React.Component {
  constructor(props) {
    super(props)
    console.log('hi')
    this.state = {
      questions: List([
        {
          value: 'what is 1+1?',
          answer: '2'
        },

        {
          value: 'what is 2+2',
          option0: '1',
          option1: '2',
          option2: '3',
          option3: '4',
          answer: '3'
        }
      ]),
      test: fetch('/viewApp/shortAnswerDisplay', {method: 'GET'})
            .then((res) => (res.json()))
            .catch((err) => ('oops'))
    }
  }

  wrap(question) {
    if(question.type == SHORT_ANSWER) {
      return (
        <ShortAnswerDisplay
          value={question.value}
          answer={question.answer}/>
      )
    } else if(question.type == MULTIPLE_CHOICE) {
      return (
        <MultipleAnswerDisplay
          value={question.value}
          option0={question.option0}
          option1={question.option1}
          option2={question.option2}
          option3={question.option3}
          answer={question.answer}/>
      )
    }
  }

  render() {

    return (
      <div>
        {JSON.stringify(this.state.test)}
      </div>
    )
  }
}

export default ListQuestions
