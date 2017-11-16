import React from 'react'
import ViewEditApp from './viewEditApp'

class ViewApp extends React.Component {

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

export default ViewApp
