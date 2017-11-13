import React from 'react'
import {List} from 'immutable'
import ShortAnswerDisplay from '../question/shortAnswerDisplay'
import MultipleAnswerDisplay from '../question/multipleAnswerDisplay'
import ViewEditApp from '../../apps/viewEditApp'

const SHORT_ANSWER = 'SA'
const MULTIPLE_CHOICE = 'MC'

class ListQuestions extends React.Component {

  componentWillMount() {
    fetch('/questionApi/get/all')
      .then((res) => (
        res.json()
      ))
      .then((res) => {
        this.setState({questions:res})
        console.log(this.state.questions)
      })
  }

  constructor(props) {
    super(props)
    this.state = {
      questions: undefined
    }
  }

  // handleEditTemp(event) {
  //   event.preventDefault()
  //   var data = {
  //     qKey: question.qKey,
  //     qType: question.qType,
  //     qValue: question.qvalue,
  //     answer: question.answer,
  //     candidate1: question.candidate1,
  //     candidate2: question.candidate2,
  //     candidate3: question.candidate3,
  //     candidate4: question.candidate4
  //   }
  //   fetch("/viewApp/editQuestion/" + data.qKey, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(data)
  //   }).then(function(response) {
  //       if (response.status >= 400) {
  //           throw new Error("Bad response from server");
  //       }
  //       return response.json();
  //   }).catch(function(err) {
  //       console.log(err)
  //   });
  // }

  // handleDeleteTemp(event) {
  //   event.preventDefault()
  //   var data = {
  //       qKey: question.qKey
  //   }
  //   fetch("/viewApp/deleteQuestion/" + data.qKey, {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify(data)
  //   }).then(function(response) {
  //       if (response.status >= 400) {
  //         throw new Error("Bad response from server");
  //       }
  //       return response.json();
  //   }).catch(function(err) {
  //       console.log(err)
  //   });
  // }

  wrap(q) {
    return(
      <ViewEditApp
        index={q.qKey}
        type={q.qType}
        value={q.qValue}
        answer={q.answer}
        option0={q.candidate1}
        option1={q.candidate2}
        option2={q.candidate3}
        option3={q.candidate4}/>
    )
  }

  render() {
    let qList = undefined
    if (this.state.questions) {
      qList = this.state.questions.map((q) => (
        this.wrap(q)
      ))
    } else {
      qList = undefined
    }
    return (
      <div>
        {qList}
      </div>
    )
  }
}

export default ListQuestions
