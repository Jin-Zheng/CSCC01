import React from 'react'
import {Set} from 'immutable'

const SHORT_ANSWER = 'SA'
const MULTIPLE_CHOICE = 'MC'

class GetQuestionDisplay extends React.component {

  componentWillMount() {
    let pane = undefined
    if (this.props.data.type === SHORT_ANSWER) {
      pane = (
        <ShortAnswerDisplay
          value = {this.props.data.qValue}
          answer = {this.props.data.answer}
          index = {this.props.data.qKey}/>
      )
    } else if (this.props.type === MULTIPLE_CHOICE) {
      pane = (
        <MultipleAnswerDisplay
          value = {this.props.data.qValue}
          answer = {this.props.data.answer}
          index = {this.props.data.qKey}
          option0 = {this.props.data.candidate1}
          option1 = {this.props.data.candidate2}
          option2 = {this.props.data.candidate3}
          option3 = {this.props.data.candidate4}/>
      )
    }

    this.setState({
      pane: pane
    })
  }

  render() {
    return (
      <div>
        {this.state.pane}
      </div>
    )
  }
}

class SelectQuestions extends React.Component {
  componentWillMount() {
    fetch('/api/question/get/all')
    .then((res) => (
      res.json()
    )).then((res) => (
      this.setState({question: res})
    )).catch((err)=>(
      console.log(err)
    ))

    this.setState({
      selected: Set()
    })
  }

  constuctor(props) {
    super(props)
    this.state = {
      questions: undefined,
      selected: undefined
    }
  }

  wrap(q) => {
    <GetQuestionDisplay data={this.state.data}/>
  }
}

export default SelectQuestions
